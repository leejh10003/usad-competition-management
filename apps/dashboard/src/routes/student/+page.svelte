<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Dialog, Portal, Collapsible } from '@skeletonlabs/skeleton-svelte';
	import _, { debounce } from 'lodash';
	import { studentQuerySchema, studentResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, XIcon, File, Trash, Pencil } from '@lucide/svelte';
	import z from 'zod';
	import Pdf from '$lib/components/pdf.svelte';
	import { workerRequest } from '$lib/api/test';
	import { resolve } from '$app/paths';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import TextInput from '$lib/components/text-input.svelte';
	import Select from '$lib/components/select.svelte';
	import ScoreInput from '$lib/components/score-input.svelte';
	import { states } from 'usad-enums';
	import { imask } from '@imask/svelte';
	import SearchSelect from '$lib/components/search-select.svelte';
	import { competitionResponseItemSchema } from 'usad-scheme';
	import type { SchoolSearch, TeamSearch } from '$lib/data/schema';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import { cloneDeep } from 'lodash';
	//TODO: determine to use response item as schema, or use client specific schema, or splitting input/update schema
	type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
	type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var searchedSchools = $state<SchoolSearch[]>([]);
	var searchedTeams = $state<TeamSearch[]>([]);
	var isFirstLoaded = $state<boolean>(true);
	var isActionBlocked = $state<boolean>(false);
	var students = $state<StudentResponseItem[]>([]);
	var currentCount = $state<number>(0);
	var currentEdit = $state<StudentResponseItem | null>(null);
	var pin = $state<string>('');
	const query = $derived.by(() => page.url.searchParams);
	var competitions = $state<CompetitionResponseItem[]>([]);

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
			schoolId: school.id,
			schoolName: school.name,
			competitionInfo: competitions.find((comp) => comp.id === school.competitionId)?.name || 'N/A'
		}));
	}
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	});
	function setLimit(input: number) {
		const route = page.url.pathname;
		const params = _currentParam();
		params.set('limit', input.toString());
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going))
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
	var total = $state<number>(0);
	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
	async function fetch() {
		isLoading = true;
		//TODO: server fetch
		//TODO: Handle school/team id for individual or school student
		const {result, count} = await workerRequest.getStudent({
			take: getLimit,
			skip: offset
		});
		var teams = await workerRequest.getTeam({
			where: {
				id: {
					in: result.map((student) => student.teamId).filter((id): id is string => !!id)
				}
			}
		});
		var schools = await workerRequest.getSchool({
			where: {
				id: {
					in: result.map((student) => student.schoolId).filter((id): id is string => !!id)
				}
			}
		});
		competitions = (await workerRequest.getCompetition({
			where: {
				id: {
					in: schools.result.map((school) => school.competitionId)
				}
			}
		})).result;
		searchedSchools = schools.result.map((school) => {
			const competition = competitions.find((comp) => comp.id === school.competitionId);
			return {
				schoolId: school.id,
				schoolName: school.name,
				competitionInfo: competition ? competition.name : 'N/A'
			}
		});
		searchedTeams = teams.result.map((team) => {
			const school = schools.result.find((school) => school.id === team.schoolId);
			const competition = competitions.find((comp) => comp.id === school?.competitionId);
			return {
				teamId: team.id,
				additionalInfo: `School: ${school ? school.name : 'N/A'}, Competition: ${competition ? competition.name : 'N/A'}`
			}
		});
		students = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		const entries = Object.fromEntries(page.url.searchParams.entries());
		for (const [key, value] of Object.entries(entries)) {
			try {
				entries[key] = decodeURIComponent(value as string);
			} catch (e) {
				entries[key] = value;
			}
		}
		let searchParams = studentQuerySchema.safeParse(
			entries
		);
		if (searchParams.success) {
			fetch();
		} else {
			//TODO
		}
	});
	function determineStudentIsIndividual(student: StudentResponseItem) {
		return !!(student.guardianPhone || student.guardianLastName || student.guardianFirstName || student.guardianEmail);
	}
</script>
{#snippet studentDetail(alreadyExisting: boolean)}
	<Select
		propName="Student Type"
		bind:value={currentEdit!.type}
		options={[
			{ label: 'Individual', value: "individual" },
			{ label: 'School/Team', value: "team" }
		]}
		key={(option) => option.value.toString()}
		display={(option) => option.label}
		mapValue={(option) => option.value}
	/>
	<TextInput
		propName="Student ID #"
		bind:inputValue={currentEdit!.externalStudentId}
	/>
	<TextInput
		propName="First Name"
		bind:inputValue={currentEdit!.firstName}
	/>
	<TextInput
		propName="Last Name"
		bind:inputValue={currentEdit!.lastName}
	/>
	<Select
		propName="Division"
		bind:value={currentEdit!.division}
		options={[
			{ label: 'Honors', value: 'H' },
			{ label: 'Scholastic', value: 'S' },
			{ label: 'Varsity', value: 'V' }
		]}
		key={(option) => option.value}
		display={(option) => option.label}
		mapValue={(option) => option.value}
	/>
	<ScoreInput propName="Objective Score" bind:inputValue={currentEdit!.objectiveScore} />
	<ScoreInput propName="Subjective Score" bind:inputValue={currentEdit!.subjectiveScore} />
	<label class="label">
		<span class="label-text">GPA</span>
		<input
			required
			class="input"
			use:imask={{
				mask: Number,
				thousandsSeparator: ',',
				scale: 4,
				radix: '.',
				padFractionalZeros: true,
				normalizeZeros: true,
				lazy: false,
			}}
			onaccept={({detail: maskRef}) => {
				currentEdit!.gpa = parseFloat(maskRef.value.replaceAll(',', ''));
			}}
			value={currentEdit!.gpa}
		/>
	</label>
	<label class="label">
		<span class="label-text">PIN</span>
		<input class="input w-full" type="password" onchange={(v) => pin = v.currentTarget.value} />
	</label>
	<!--TODO: uploaded files => After implementing file uploading-->
	signature
	attachmentOnRegistering
	{#if currentEdit!.type !== "individual" || alreadyExisting}
		<!--TODO: Select school/team. But for individuals, only show virtual ones. If school/team ones, show real ones-->
		<!--TODO: If parent ones are changed, reset children ones. List and value, both of them-->
		<SearchSelect
			items={competitions}
			bind:value={currentEdit!.competitionId!}
			itemToString={(item) => item.name}
			itemToValue={(item) => item.id}
			fetchItems={fetchCompetitions}
			propName="Competition Name"
			placeHolder="Type to search competitions..."
		/>
		<SearchSelect
			items={searchedSchools}
			bind:value={currentEdit!.schoolId!}
			itemToString={(item) => item.schoolName}
			itemToValue={(item) => item.schoolId}
			itemsSubscript={(item) => `Competition: ${item.competitionInfo}`}
			fetchItems={fetchSchools}
			propName="School Name"
			placeHolder="Type to search schools..."
		/>
		<!--<SearchSelect
			items={searchedTeams}
			bind:value={currentEdit!.teamId!}
			itemToString={(item) => item.additionalInfo}
			itemToValue={(item) => item.teamId}
			fetchItems={fetchTeams}
			propName="Search Team"
			placeHolder="Type to search team..."
		/>-->
	{/if}
	{#if currentEdit!.type === "individual"	}
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
		<TextInput
			propName="Guardian First Name"
			bind:inputValue={currentEdit!.guardianFirstName}
		/>
		<TextInput
			propName="Guardian Last Name"
			bind:inputValue={currentEdit!.guardianLastName}
		/>
		<TextInput
			propName="Guardian Phone"
			bind:inputValue={currentEdit!.guardianPhone}
		/>
		<TextInput
			propName="Guardian Email"
			bind:inputValue={currentEdit!.guardianEmail}
		/>
	{/if}
{/snippet}
{#snippet actions(student: StudentResponseItem)}
	{@const { attachmentOnRegistering, id } = student}
	<Dialog>
		<Dialog.Trigger
			onclick={() =>
				(currentEdit = cloneDeep(student))}
			class="btn preset-filled w-min"
			disabled={isActionBlocked}><Pencil />Edit</Dialog.Trigger
		>
		<Portal>
			{#if currentEdit}
				<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
				<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
					<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
						<header class="flex items-center justify-between">
							<Dialog.Title class="text-lg font-bold">Edit Student: {name}</Dialog.Title>
							<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
								<XIcon class="size-4" />
							</Dialog.CloseTrigger>
						</header>
						{@render studentDetail(true)}
						<footer class="flex justify-end gap-2">
							<Dialog.CloseTrigger
								class="btn preset-filled-primary-50-950"
								onclick={async () => {
									isActionBlocked = true;
									await workerRequest.updateStudent([{
										where: { id: currentEdit!.id },
										data: currentEdit!
									}]);
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
							>Delete Student: {name}</Dialog.Title>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					<Dialog.Description>
						Are you sure you want to delete student {name}? This action cannot be
						undone.
					</Dialog.Description>
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger
							class="btn preset-filled-danger-50-950"
							onclick={async () => {
								isActionBlocked = true;
								await workerRequest.deleteStudents({ where: {id: {equals: id}} });
								await fetch();
							}}>Delete</Dialog.CloseTrigger
						>
						<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
					</footer>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog>
	<Dialog>
		<Dialog.Trigger class="btn preset-filled"><File />Show PDF</Dialog.Trigger>
		<Portal>
			<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
			<Dialog.Positioner
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
			>
				<Dialog.Content
					class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {animation}"
				>
					<header class="flex items-center justify-between">
						<Dialog.Title class="text-lg font-bold">Pdf Viewer</Dialog.Title>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					<Dialog.Description>
						<Pdf data={attachmentOnRegistering ?? ''} />
					</Dialog.Description>
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
					</footer>
				</Dialog.Content>
			</Dialog.Positioner>
		</Portal>
	</Dialog>
{/snippet}
<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Student</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
			<label class="label">
				<span class="label-text">Students Per Page</span>
				<input
					class="input"
					type="number"
					onchange={(e) => {
						if (_.isNumber(e.currentTarget.value)) {
							setLimit(e.currentTarget.value);
						} else {
							setLimit(parseInt(e.currentTarget.value));
						}
					}}
					value={getLimit}
				/>
			</label>
		</Collapsible.Content>
	</Collapsible>
	<DisplayTable 
		{isLoading} 
		data={students}
		{total}
		{getLimit}
		{isFirstLoaded}
		{offset}
		{currentCount}
		columns={[
			{ header: 'ID #', accessor: 'externalStudentId' },
			{ header: 'Name', cell: (row) => `${row.firstName} ${row.lastName}` },
			{ header: 'Address', cell: (row) => {
				const { streetAddress, city, state, zipCode } = row;
				return `${streetAddress ?? ''}${streetAddress ? ', ' : ''}${city ?? ''}${city ? ', ' : ''}${state ?? ''}${state ? ', ' : ''}${zipCode ? `(${zipCode})` : ''}`;
			} },
			{ header: 'GPA', accessor: 'gpa' },
			{ header: 'Group', cell: (row) => {
				const { division } = row;
				return division === 'H'
					? 'Honors'
					: division === 'S'
						? 'Scholastic'
						: division === 'V'
							? 'Varsity'
							: 'Not assigned';
			} },
			{header: 'Attachment', snippet: actions}
		]}
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
