<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { cloneDeep } from 'lodash';
	import TextInput from '$lib/components/text-input.svelte'
	import ScoreInput from '$lib/components/score-input.svelte'
	import Select from '$lib/components/select.svelte';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { parseInt, isNumber } from 'es-toolkit/compat';
	import { range } from 'es-toolkit';
	import { splitStringForQueryHighlight } from '$lib/utils/string';
	import { competitionResponseItemSchema, schoolQuerySchema, schoolResponse, stateEnums } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2, Pencil, School, Trash, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import romans, { romanize } from 'romans';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import { states } from 'usad-enums';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import DisplayTable from '$lib/components/display-table.svelte';
	import SearchedText from '$lib/components/searched-text.svelte';
	import SearchSelect from '$lib/components/search-select.svelte';
	type SchoolResponseItem = z.infer<typeof schoolResponse>['school'];
	type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
	type SchoolWithCompetition = {
		school: SchoolResponseItem;
		competition: CompetitionResponseItem;
	}
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var isActionBlocked = $state<boolean>(false);
	var competitions = $state<CompetitionResponseItem[]>([]);
	var schools = $state<SchoolWithCompetition[]>([]);
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const schoolNameQueryString = query.get('schoolNameQueryString');
		const externalSchoolIdQueryString = query.get('externalSchoolIdQueryString');
		const params = new URLSearchParams();
		try {
			params.set('limit', parseInt(decodeURI(limit!)).toString());
		} catch (e) {}
		if (currentPage && decodeURI(currentPage as string).trim().length > 0) {
			params.set('currentPage', decodeURI(currentPage as string));
		}
		if (schoolNameQueryString && decodeURI(schoolNameQueryString as string).trim().length > 0) {
			params.set('schoolNameQueryString', decodeURI(schoolNameQueryString as string));
		}
		if (externalSchoolIdQueryString && decodeURI(externalSchoolIdQueryString as string).trim().length > 0) {
			params.set('externalSchoolIdQueryString', decodeURI(externalSchoolIdQueryString as string));
		}
		return params;
	}
	const query = $derived.by(() => page.url.searchParams);
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	});
	let currentEdit = $state<SchoolResponseItem | null>(null);
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
	const getSchoolNameQueryString = $derived(query.get('schoolNameQueryString') ?? undefined);
	function setSchoolNameQueryString(input: string | undefined) {
		const route = page.url.pathname;
		const params = _currentParam();
		if (!input || input.trim().length < 1) {
			params.delete('schoolNameQueryString');
		} else {
			params.set('schoolNameQueryString', input);
		}
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going));
	}
	const getExternalSchoolIdQueryString = $derived(query.get('externalSchoolIdQueryString') ?? undefined);
	function setExternalSchoolIdQueryString(input: string | undefined) {
		const route = page.url.pathname;
		const params = _currentParam();
		if (!input || input.trim().length < 1) {
			params.delete('externalSchoolIdQueryString');
		} else {
			params.set('externalSchoolIdQueryString', input);
		}
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going));
	}
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
		//eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function fetchCompetitions(query: string) {
		const { result } = await workerRequest.getCompetition({
			where: {
				name: {
					contains: query,
					mode: 'insensitive'
				}
			},
			take: 50,
		});
		competitions = result;
	}
	async function fetch() {
		isLoading = true;
		//TODO: server fetch
		const {result, count} = await workerRequest.getSchool({
			take: getLimit,
			skip: offset,
			where: getSchoolNameQueryString || getExternalSchoolIdQueryString ? {
				...(getSchoolNameQueryString ? {
					name: {
						contains: getSchoolNameQueryString
					}
				} : {}),
				...(getExternalSchoolIdQueryString ? {
					externalSchoolId: {
						contains: getExternalSchoolIdQueryString
					}
				} : {})
			} : undefined
		});
		const { result: competitionResult } = await workerRequest.getCompetition({
			where: {
				id: {
					in: result.map((e) => e.competitionId)
				}
			}
		});
		schools = result.map((school) => ({
			school,
			competition: competitionResult.find((comp) => comp.id === school.competitionId)!
		}));
		competitions = competitionResult;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = schoolQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch();
		} else {
			//TODO:
		}
	});
	/*function changeFilter() {
		const searchParams = page.url.searchParams;
		searchParams.set('test', 'true');
		goto(`?${searchParams.toString()}`);
	}*/
</script>
{#snippet schoolDetail(schoolId: string)}
<div class="grid grid-rows-[auto_1fr_auto] h-full max-h-[calc(100vh-200px)] overflow-y-scroll">
	<Dialog.Description>
		<SearchSelect
			items={competitions}
			bind:value={currentEdit!.competitionId}
			itemToString={(item) => item.name}
			itemToValue={(item) => item.id}
			fetchItems={fetchCompetitions}
			propName="Competition Name"
			placeHolder="Type to search competitions..."
		/>
		<TextInput propName="School Id #" bind:inputValue={currentEdit!.externalSchoolId} />
		<TextInput propName="School Name" bind:inputValue={currentEdit!.name} />
		<label class="label">
			<span class="label-text">Is This School Virtual?</span>
			<input type="checkbox" class="checkbox" bind:checked={currentEdit!.isVirtual} />
		</label>
		<TextInput propName="Street Address" bind:inputValue={currentEdit!.streetAddress} />
		<TextInput propName="City" bind:inputValue={currentEdit!.city} />
		<Select
			propName="State"
			bind:value={currentEdit!.state}
			key={input => input?.shorthand ?? ''}
			display={input => `${input?.original ?? ''} (${input?.shorthand ?? ''})`}
			options={states}
			mapValue={input => input.shorthand}
		/>
		<TextInput propName="Zip Code" bind:inputValue={currentEdit!.zipCode} />
		<TextInput propName="Phone #" bind:inputValue={currentEdit!.phone} />
		<TextInput propName="Principal Name" bind:inputValue={currentEdit!.principalName} />
		<TextInput propName="Principal Email" bind:inputValue={currentEdit!.principalEmail} />
		<ScoreInput propName="Objective Score" bind:inputValue={currentEdit!.objectiveScore} />
		<ScoreInput propName="Subjective Score" bind:inputValue={currentEdit!.subjectiveScore} />
		<TextInput propName="Email Domain" bind:inputValue={currentEdit!.emailDomain} />
		<Select
			propName="Division"
			bind:value={currentEdit!.division}
			key={input => input.toString()}
			display={input => romanize(input)}
			options={range(1, 5)}
			mapValue={input => parseInt(input.toString())}
		/>
		<!--TODOs-->
		primaryCoachId
	</Dialog.Description>
</div>
{/snippet}
{#snippet actions(row: SchoolWithCompetition)}
{@const {school, school: {name}, competition} = row}
<Dialog>
	<Dialog.Trigger
		onclick={() => {
			currentEdit = cloneDeep(school);
			competitions = [competition];
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
							>Edit School: {name}</Dialog.Title
						>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					{@render schoolDetail(currentEdit.id)}
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger
							class="btn preset-filled-primary-50-950"
							onclick={async () => {
								isActionBlocked = true;
								await workerRequest.updateSchool([
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
						>Delete School: {name}</Dialog.Title
					>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					Are you sure you want to delete school {name}? This action cannot be
					undone.
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger
						class="btn preset-filled-danger-50-950"
						onclick={async () => {
							isActionBlocked = true;
							await workerRequest.deleteSchools({ where: {id: {equals: school.id}} });
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
{#snippet schoolNameSearch(row: SchoolWithCompetition)}
	{@const splitted = splitStringForQueryHighlight(row.school.name, getSchoolNameQueryString)}
	<SearchedText {splitted} />
{/snippet}
{#snippet schoolIdSearch(row: SchoolWithCompetition)}
	{@const splitted = splitStringForQueryHighlight(row.school.externalSchoolId, getExternalSchoolIdQueryString)}
	<SearchedText {splitted} />
{/snippet}
{#snippet schoolPrincipal({school: {principalEmail, principalName}}: SchoolWithCompetition)}
{principalName} (email:
		<a href={`mailto:${principalEmail}`}>{principalEmail}</a>)
{/snippet}
<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">School</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Filter, Search, Sort and Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
			<label class="label">
				<span class="label-text">School Name</span>
				<input
					class="input"
					onchange={(v) => setSchoolNameQueryString(v.currentTarget.value)}
					value={getSchoolNameQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">School Id</span>
				<input
					class="input"
					oninput={(v) => setExternalSchoolIdQueryString(v.currentTarget.value)}
					value={getExternalSchoolIdQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">Schools Per Page</span>
				<input
					class="input"
					type="number"
					onchange={(e) => {
						if (isNumber(e.currentTarget.value)) {
							setLimit(e.currentTarget.value);
						} else {
							setLimit(parseInt(e.currentTarget.value));
						}
					}}
					value={getLimit}
				/>
			</label>
			<Dialog>
				<Dialog.Trigger
					onclick={() =>{
						currentEdit = {
							id: workerRequest.generateNewCompetitionId(),
							name: '',
							division: null,
							isVirtual: false,
							externalSchoolId: '',
							streetAddress: '',
							city: '',
							mutationIndex: 0,
							competitionId: '',
						};
						competitions = [];
					}}
					class="btn preset-filled w-min"
					disabled={isActionBlocked}><School /> Create School</Dialog.Trigger
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
								{@render schoolDetail(currentEdit.id)}
								<footer class="flex justify-end gap-2">
									<Dialog.CloseTrigger
										class="btn preset-filled-primary-50-950"
										onclick={async () => {
											isActionBlocked = true;
											await workerRequest.insertNewSchool(currentEdit!);
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
		{isFirstLoaded}
		{offset}
		{getLimit}
		{total}
		{currentCount}
		getId={(item) => item.school.id}
		data={schools}
		columns={[
			{
				header: 'School ID',
				snippet: schoolIdSearch
			},
			{
				header: 'School Name',
				snippet: schoolNameSearch
			},
			{
				header: 'School Address',
				cell: ({school: {streetAddress, city, state, zipCode}}) => `${streetAddress}, ${city}, ${state} (${zipCode})`
			},
			{
				header: 'School Phone #',
				accessor: 'school.phone'
			},
			{
				header: 'School Principal',
				snippet: schoolPrincipal
			},
			{
				header: 'Division',
				cell: ({school: {division}}) => division ? romanize(division) : '-'
			},
			{
				header: 'Action',
				snippet: actions
			}
		]}
		
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
