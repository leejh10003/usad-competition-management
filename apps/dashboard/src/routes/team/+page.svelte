<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { imask } from '@imask/svelte';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import _, { cloneDeep } from 'lodash';
	import { teamQuerySchema, teamResponseItemSchema } from 'usad-scheme';
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
	type TeamResponseItem = z.infer<typeof teamResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var teams = $state<TeamResponseItem[]>([]);
	var currentEdit = $state<TeamResponseItem | null>(null);
	var isActionBlocked = $state<boolean>(false);
	const query = $derived.by(() => page.url.searchParams);
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	});
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const params = new URLSearchParams();
		try {
			params.set('limit', _.parseInt(decodeURI(limit!)).toString());
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
		teams = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
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
<Dialog.Description>
	<TextInput
		propName="Team Id #"
		bind:inputValue={currentEdit!.externalTeamId}
	/>
	<Select
		propName="Division"
		bind:value={currentEdit!.division}
		options={_.range(1, 5).map((division) => ({
			label: romanize(division),
			value: division
		}))}
		key={(option) => option.value}
		display={(option) => option.label}
		mapValue={(option) => option.value}
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
{/snippet}
{#snippet actions(team: TeamResponseItem)}
<Dialog>
	<Dialog.Trigger
		onclick={() => (currentEdit = cloneDeep(team))}
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
					onclick={() =>
						(currentEdit = {
							id: workerRequest.generateNewTeamId(),
							division: null,
							externalTeamId: '',
							objectiveScore: 0,
							subjectiveScore: 0,
							schoolId: ''
						})}
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
			{ header: 'ID #', accessor: 'externalTeamId' },
			{ header: 'School ID #', accessor: 'schoolId' },
			{ header: 'Division', cell: (row) => (row.division ? romanize(row.division) : '-') },
			{ header: 'Action', snippet: actions }
		]}
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
