<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { cloneDeep } from 'lodash';
	import TextInput from '$lib/components/text-input.svelte'
	import ScoreInput from '$lib/components/score-input.svelte'
	import Select from '$lib/components/select.svelte';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { splitStringForQueryHighlight } from '$lib/utils/string';
	import { schoolQuerySchema, schoolResponse, stateEnums } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2, Pencil, School, Trash, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import romans, { romanize } from 'romans';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import { states } from 'usad-enums';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	type SchoolResponseItem = z.infer<typeof schoolResponse>['school'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var isActionBlocked = $state<boolean>(false);
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const schoolNameQueryString = query.get('schoolNameQueryString');
		const externalSchoolIdQueryString = query.get('externalSchoolIdQueryString');
		const params = new URLSearchParams();
		try {
			params.set('limit', _.parseInt(decodeURI(limit!)).toString());
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
	var schools = $state<SchoolResponseItem[]>([]);
		//eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		schools = result;
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
	<Dialog.Description>
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
			options={_.range(1, 5)}
			mapValue={input => parseInt(input.toString())}
		/>
		<!--TODOs-->
		primaryCoachId
		competitionId
	</Dialog.Description>
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
						if (_.isNumber(e.currentTarget.value)) {
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
					onclick={() =>
						(currentEdit = {
							id: workerRequest.generateNewCompetitionId(),
							name: '',
							division: null,
							isVirtual: false,
							externalSchoolId: '',
							streetAddress: '',
							city: '',
							mutationIndex: 0,
							competitionId: '',
						})}
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
	<table class="table">
		<thead>
			<tr>
				<td>School Id</td>
				<td>School Name</td>
				<td>School Address</td>
				<td>School Phone #</td>
				<td>School Principal</td>
				<td>Division</td>
				<td>Action</td>
			</tr>
		</thead>
		<tbody>
			{#if isLoading}
				{#each _.range(0, getLimit, 1) as n (n)}
					<tr>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
					</tr>
				{/each}
			{:else}
				{#each schools as school (school.id)}
					{@const {
						//eslint-disable-next-line @typescript-eslint/no-unused-vars
						externalSchoolId,
						name,
						principalEmail,
						principalName,
						phone,
						streetAddress,
						city,
						state,
						zipCode,
						division,
						id
					} = school}
					{@const nameSplit = splitStringForQueryHighlight(name, getSchoolNameQueryString)}
					{@const externalSchoolIdSplit = splitStringForQueryHighlight(
						externalSchoolId,
						getExternalSchoolIdQueryString
					)}
					<tr>
						<td>
							<div class="flex flex-row">
								{#each externalSchoolIdSplit as { originalQuery, originalString }, i (i)}
									<span class="whitespace-pre">{originalString}</span>
									<span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
								{/each}
							</div>
						</td>
						<td>
							<div class="flex flex-row">
								{#each nameSplit as { originalQuery, originalString }, i (i)}
									<span class="whitespace-pre">{originalString}</span>
									<span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
								{/each}
							</div>
						</td>
						<td>{streetAddress}, {city}, {state} ({zipCode})</td>
						<td>{phone}</td>
						<td
							>{principalName} (email:
							<a href={`mailto:${principalEmail}`}>{principalEmail}</a>)</td
						>
						<td>
							{division ? romanize(division) : '-'}
						</td>

						<td>
							<!--<Dialog
								onOpenChange={({ open }) => {
									console.log('open', open);
								}}
							>
								<Dialog.Trigger class="btn preset-filled" disabled={isActionBlocked}
									><MailIcon />Send Mails</Dialog.Trigger
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
												<Dialog.Title class="text-lg font-bold">Send Mails</Dialog.Title>
												<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
													<XIcon class="size-4" />
												</Dialog.CloseTrigger>
											</header>
											<Dialog.Description>
												{#each mailAddresses as address, i (i)}
													<p>{i + 1}</p>
												{/each}
												<Editor bind:this={editor.editor} />
											</Dialog.Description>
											<footer class="flex justify-end gap-2">
												<Dialog.CloseTrigger
													onclick={async () => {
														console.log(editor.editor?.quill.getSemanticHTML());
													}}
													class="btn preset-filled-primary-50-950">Send</Dialog.CloseTrigger
												>
												<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
											</footer>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog>-->
							<Dialog>
								<Dialog.Trigger
									onclick={() => (currentEdit = cloneDeep(school))}
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
														await workerRequest.deleteSchools({ where: {id: {equals: id}} });
														await fetch();
													}}>Delete</Dialog.CloseTrigger
												>
												<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
											</footer>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="6">Total</td>
				{#if isFirstLoaded}
					<td colspan="1">{offset + 1} - {offset + currentCount}/{total} Elements</td>
				{:else}
					<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
				{/if}
			</tr>
		</tfoot>
	</table>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
