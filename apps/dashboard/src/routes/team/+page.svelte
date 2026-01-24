<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { imask } from '@imask/svelte';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { cloneDeep, range } from 'es-toolkit';
	import { parseInt } from 'es-toolkit/compat';
	import { competitionResponseItemSchema, teamQuerySchema, teamResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, Pencil, Trash, UsersIcon, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import { romanize } from 'romans';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import TextInput from '$lib/components/text-input.svelte';
	import Select from '$lib/components/select.svelte';
	import ScoreInput from '$lib/components/score-input.svelte';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import SearchSelect from '$lib/components/search-select.svelte';
	import type { schoolResponseItemSchema } from 'usad-scheme/src/school';
	import type { SchoolsAgregatedItem, TeamAggregatedItem, TeamResponseItem } from '$lib/data/types';
	
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var teams = $state<TeamAggregatedItem[]>([]);
	var currentEdit = $state<TeamResponseItem | null>(null);
	var isActionBlocked = $state<boolean>(false);
	var searchedSchools = $state<SchoolsAgregatedItem[]>([]);
	const query = $derived.by(() => page.url.searchParams);
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	});
	async function fetchSchools(query: string) {
		const { result } = await workerRequest.getSchool({
			where: {
				name: {
					contains: query,
					mode: 'insensitive'
				}
			},
			take: 50,
		});
		const {result: competitions} = await workerRequest.getCompetition({
			where: {
				id: {
					in: result.map((school) => school.competitionId)
				}
			}
		});
		searchedSchools = result.map((school) => ({
			school,
			competition: competitions.find((comp) => comp.id === school.competitionId)!
		}));
	}
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const params = new URLSearchParams();
		try {
			params.set('limit', parseInt(decodeURI(limit!)).toString());
		} catch (e) {}
		if (currentPage && decodeURI(currentPage as string).trim().length > 0) {
			params.set('currentPage', decodeURI(currentPage as string));
		}
		return params;
	}
	function setLimit(input: number) {
		const route = page.url.pathname;
		const params = _currentParam();
		params.set('limit', input.toString());
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going))
	}
	const getCurrentPage = $derived.by(() => {
		const currentPage = query.get('currentPage');
		return currentPage ? parseInt(currentPage) : 1;
	})
	function setCurrentPage(input: number) {
		const route = page.url.pathname;
		const params = _currentParam();
		params.set('currentPage', input.toString());
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going))
	}
	const offset = $derived.by(() => (getCurrentPage - 1) * getLimit);
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function fetch() {
		isLoading = true;
		//TODO: server fetch
		const {result, count} = await workerRequest.getTeam({
			take: getLimit,
			skip: offset
		});
		const {result: schools} = await workerRequest.getSchool({
			where: {
				id: {
					in: result.map((team) => team.schoolId)
				}
			}
		});
		const {result: competitions} = await workerRequest.getCompetition({
			where: {
				id: {
					in: schools.map((school) => school.competitionId)
				}
			}
		});
		const fetchedSchools = schools.map((school) => ({
			school,
			competition: competitions.find((comp) => comp.id === school.competitionId)!
		}));
		teams = result.map((team) => ({
			team,
			school: fetchedSchools.find((s) => s.school.id === team.schoolId)!
		}));
		total = count;
		currentCount = result.length;
		isLoading = false;
		isActionBlocked = false;
	}
	$effect(() => {
		let searchParams = teamQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch();
		} else {
			//TODO
		}
	});
	/*function changeFilter() {
		const searchParams = page.url.searchParams;
		searchParams.set('test', 'true');
		goto(`?${searchParams.toString()}`);
	}*/
</script>
{#snippet teamDetail(teamId: string)}
<div class="grid grid-rows-[auto_1fr_auto] h-full max-h-[calc(100vh-200px)] overflow-y-scroll">
	<Dialog.Description>
		<SearchSelect
			items={searchedSchools}
			bind:value={currentEdit!.schoolId}
			itemToString={(item) => item.school.name}
			itemToValue={(item) => item.school.id}
			itemsSubscript={(item) => `Competition: ${item.competition.name}`}
			fetchItems={fetchSchools}
			propName="School Name"
			placeHolder="Type to search schools..."
		/>
		<TextInput
			propName="Team Id #"
			bind:inputValue={currentEdit!.externalTeamId}
		/>
		<Select
			propName="Division"
			bind:value={currentEdit!.division}
			options={range(1, 5).map((division) => ({
				label: romanize(division),
				value: division
			}))}
			key={(option) => option.value}
			display={(option) => option.label}
			mapValue={(option) => option.value}
			convertValue={(input) => parseInt(input)}
		/>
		<ScoreInput
			propName="Objective Score"
			bind:inputValue={currentEdit!.objectiveScore}
		/>
		<ScoreInput
			propName="Subjective Score"
			bind:inputValue={currentEdit!.subjectiveScore}
		/>
		schoolId
	</Dialog.Description>
</div>
{/snippet}
{#snippet actions(row: TeamAggregatedItem)}
	{@const {team, school, team: {id, externalTeamId, division}} = row }
	{@const name = `${school.school.name} (ID: ${externalTeamId})`}
<Dialog>
	<Dialog.Trigger
		onclick={() => {
			currentEdit = cloneDeep(team);
			searchedSchools = [school];
		}}
		class="btn preset-filled"
		disabled={isActionBlocked}><Pencil />Edit</Dialog.Trigger
	>
	<Portal>
		{#if currentEdit}
			<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
			<Dialog.Positioner
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
			>
				<Dialog.Content
					class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}"
				>
					<header class="flex items-center justify-between">
						<Dialog.Title class="text-lg font-bold"
							>Edit Team: {name}</Dialog.Title
						>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					{@render teamDetail(currentEdit.id)}
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger
							class="btn preset-filled-primary-50-950"
							onclick={async () => {
								isActionBlocked = true;
								await workerRequest.updateTeam([
									{ where: { id: currentEdit!.id }, data: currentEdit! }
								]);
								await fetch();
							}}>Save</Dialog.CloseTrigger
						>
						<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
					</footer>
				</Dialog.Content>
			</Dialog.Positioner>
		{/if}
	</Portal>
</Dialog>
<Dialog>
	<Dialog.Trigger class="btn preset-filled-danger-50-950" disabled={isActionBlocked}
		><Trash />Delete</Dialog.Trigger
	>
	<Portal>
		<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
		<Dialog.Positioner
			class="fixed inset-0 z-50 flex items-center justify-center p-4"
		>
			<Dialog.Content
				class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}"
			>
				<header class="flex items-center justify-between">
					<Dialog.Title class="text-lg font-bold"
						>Delete Team: {name}</Dialog.Title
					>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					Are you sure you want to delete team {name}? This action cannot be
					undone.
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger
						class="btn preset-filled-danger-50-950"
						onclick={async () => {
							isActionBlocked = true;
							await workerRequest.deleteTeam({ where: {id: {equals: team.id}} });
							await fetch();
						}}>Delete</Dialog.CloseTrigger
					>
					<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
				</footer>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
{/snippet}
<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Team</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
			<Dialog>
				<Dialog.Trigger
					onclick={() => {
						currentEdit = {
							id: workerRequest.generateNewTeamId(),
							division: null,
							externalTeamId: '',
							objectiveScore: 0,
							subjectiveScore: 0,
							schoolId: ''
						};
						searchedSchools = [];
					}}
					class="btn preset-filled w-min"
					disabled={isActionBlocked}><UsersIcon /> Create Team</Dialog.Trigger
				>
				<Portal>
					{#if currentEdit}
						<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
						<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
							<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
								<header class="flex items-center justify-between">
									<Dialog.Title class="text-lg font-bold">Create School</Dialog.Title>
									<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
										<XIcon class="size-4" />
									</Dialog.CloseTrigger>
								</header>
								{@render teamDetail(currentEdit.id)}
								<footer class="flex justify-end gap-2">
									<Dialog.CloseTrigger
										class="btn preset-filled-primary-50-950"
										onclick={async () => {
											isActionBlocked = true;
											await workerRequest.insertNewTeam(currentEdit!);
											await fetch();
										}}>Save</Dialog.CloseTrigger
									>
									<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
								</footer>
							</Dialog.Content>
						</Dialog.Positioner>
					{/if}
				</Portal>
			</Dialog>
		</Collapsible.Content>
	</Collapsible>
	<DisplayTable
		{isLoading}
		columns={[
			{ header: 'ID #', accessor: 'team.externalTeamId' },
			{ header: 'School ID #', accessor: 'school.id' },
			{ header: 'Division', cell: (row) => (row.team.division ? romanize(row.team.division) : '-') },
			{ header: 'Action', snippet: actions }
		]}
		getId={(row) => row.team.id}
		{getLimit}
		{offset}
		{total}
		{currentCount}
		data={teams}
		{isFirstLoaded}
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
