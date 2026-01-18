<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { cloneDeep } from 'lodash';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { coachQuerySchema, coachResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, IdCardLanyard, Pencil, Trash, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import { splitStringForQueryHighlight } from '$lib/utils/string';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import TextInput from '$lib/components/text-input.svelte';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import SearchedText from '$lib/components/searched-text.svelte';
	type CoachResponseItem = z.infer<typeof coachResponseSchema>['coach'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var currentEdit = $state<CoachResponseItem | null>(null);
	var isActionBlocked = $state<boolean>(false);
	function _currentParam() {
		const limit = query.get('limit');
		const currentPage = query.get('currentPage');
		const externalCoachIdQueryString = query.get('externalCoachIdQueryString');
		const coachFirstNameQueryString = query.get('coachFirstNameQueryString');
		const coachLastNameQueryString = query.get('coachLastNameQueryString');
		const params = new URLSearchParams();
		try {
			params.set('limit', _.parseInt(decodeURI(limit!)).toString());
		} catch (e) {}
		if (currentPage && decodeURI(currentPage as string).trim().length > 0) {
			params.set('currentPage', decodeURI(currentPage as string));
		}
		if (externalCoachIdQueryString && decodeURI(externalCoachIdQueryString as string).trim().length > 0) {
			params.set('externalCoachIdQueryString', decodeURI(externalCoachIdQueryString as string));
		}
		if (coachFirstNameQueryString && decodeURI(coachFirstNameQueryString as string).trim().length > 0) {
			params.set('coachFirstNameQueryString', decodeURI(coachFirstNameQueryString as string));
		}
		if (coachLastNameQueryString && decodeURI(coachLastNameQueryString as string).trim().length > 0) {
			params.set('coachLastNameQueryString', decodeURI(coachLastNameQueryString as string));
		}
		return params;
	}
	const getLimit = $derived.by(() => {
		const limit = query.get('limit');
		const parsed = parseInt(limit ?? 'NaN');
		return isNaN(parsed) ? 10 : parseInt(limit ?? 'NaN');
	})
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
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var coaches = $state<CoachResponseItem[]>([]);
	const query = $derived.by(() => page.url.searchParams);
	const getExternalCoachIdQueryString = $derived(query.get('externalCoachIdQueryString') ?? undefined)
	function setExternalCoachIdQueryString(input: string | undefined) {
		const route = page.url.pathname;
		const params = _currentParam();
		if (!input || input.trim().length < 1) {
			params.delete('externalCoachIdQueryString');
		} else {
			params.set('externalCoachIdQueryString', input);
		}
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going));
	}
	const getCoachFirstNameQueryString = $derived(query.get('coachFirstNameQueryString') ?? undefined)
	function setCoachFirstNameQueryString(input: string | undefined){
		const route = page.url.pathname;
		const params = _currentParam();
		if (!input || input.trim().length < 1) {
			params.delete('coachFirstNameQueryString');
		} else {
			params.set('coachFirstNameQueryString', input);
		}
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going));
	}
	const getCoachLastNameQueryString = $derived(query.get('coachLastNameQueryString') ?? undefined)
	function setCoachLastNameQueryString(input: string | undefined){
		const route = page.url.pathname;
		const params = _currentParam();
		if (!input || input.trim().length < 1) {
			params.delete('coachLastNameQueryString');
		} else {
			params.set('coachLastNameQueryString', input);
		}
		const going = `/${route.replace(/^\//g, '')}${params.size > 0 ? `?${params.toString()}` : ''}` as Parameters<typeof resolve>[0];
		goto(resolve(going));
	}
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function fetch() {
		isLoading = true;
		//TODO: server fetch
		const {result, count} = await workerRequest.getCoach({
			take: getLimit,
			skip: offset,
			where: getCoachFirstNameQueryString || getCoachLastNameQueryString || getExternalCoachIdQueryString ? {
				...(getCoachFirstNameQueryString ? {
					firstName: {
						contains: getCoachFirstNameQueryString
					}
				} : {}),
				...(getCoachLastNameQueryString ? {
					lastName: {
						contains: getCoachLastNameQueryString
					}
				} : {}),
				...(getExternalCoachIdQueryString ? {
					externalCoachId: {
						contains: getExternalCoachIdQueryString
					}
				} : {})
			} : undefined
		});
		coaches = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = coachQuerySchema.safeParse(
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
{#snippet coachDetail(coachId: string)}
<Dialog.Description>
	<TextInput
		propName="Coach ID"
		bind:inputValue={currentEdit!.externalCoachId}
	/>
	<TextInput
		propName="First Name"
		bind:inputValue={currentEdit!.firstName}
	/>
	<TextInput
		propName="Last Name"
		bind:inputValue={currentEdit!.lastName}
	/>
	<TextInput
		propName="Email"
		bind:inputValue={currentEdit!.email}
	/>
	<TextInput
		propName="Phone"
		bind:inputValue={currentEdit!.phone}
	/>
	<!--Todos-->
	signature
	schoolId
</Dialog.Description>
{/snippet}
{#snippet actions(coach: CoachResponseItem)}
<Dialog>
	<Dialog.Trigger
		onclick={() => (currentEdit = cloneDeep(coach))}
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
							>Edit Coach: {name}</Dialog.Title
						>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					{@render coachDetail(currentEdit.id)}
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger
							class="btn preset-filled-primary-50-950"
							onclick={async () => {
								isActionBlocked = true;
								await workerRequest.updateCoach([
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
						>Delete Coach: {name}</Dialog.Title
					>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					Are you sure you want to delete coach {name}? This action cannot be
					undone.
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger
						class="btn preset-filled-danger-50-950"
						onclick={async () => {
							isActionBlocked = true;
							await workerRequest.deleteCoaches({ where: {id: {equals: coach.id}} });
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
{#snippet nameSearch(row: CoachResponseItem)}
	{@const { firstName, lastName } = row}
	{@const firstNameSplit = splitStringForQueryHighlight(
		firstName,
		getCoachFirstNameQueryString
	)}
	{@const lastNameSplit = splitStringForQueryHighlight(
		lastName,
		getCoachLastNameQueryString
	)}
	<div class="flex flex-row">
		<SearchedText splitted={firstNameSplit} /> &nbsp;<SearchedText splitted={lastNameSplit} />
	</div>
{/snippet}
<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Coach</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Filter, Search, Sort and Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
			<label class="label">
				<span class="label-text">Coach ID</span>
				<input
					class="input"
					onchange={(v) => setExternalCoachIdQueryString(v.currentTarget.value)}
					value={getExternalCoachIdQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">Coach First Name</span>
				<input
					class="input"
					onchange={(v) => setCoachFirstNameQueryString(v.currentTarget.value)}
					value={getCoachFirstNameQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">Coach Last Name</span>
				<input
					class="input"
					onchange={(v) => setCoachLastNameQueryString(v.currentTarget.value)}
					value={getCoachLastNameQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">Coaches Per Page</span>
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
			<div class="flex flex-row justify-center items-end">
				<Dialog>
					<Dialog.Trigger
						onclick={() =>
							(currentEdit = {
								id: workerRequest.generateNewCompetitionId(),
								mutationIndex: 0,
								externalCoachId: '',
								firstName: '',
								lastName: '',
								email: '',
								phone: '',
								schoolId: '',
							})}
						class="btn preset-filled w-min h-min"
						disabled={isActionBlocked}><IdCardLanyard /> Create Coach</Dialog.Trigger
					>
					<Portal>
						{#if currentEdit}
							<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
							<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
								<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
									<header class="flex items-center justify-between">
										<Dialog.Title class="text-lg font-bold">Create Coach</Dialog.Title>
										<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
											<XIcon class="size-4" />
										</Dialog.CloseTrigger>
									</header>
									{@render coachDetail(currentEdit!.id)}
									<footer class="flex justify-end gap-2">
										<Dialog.CloseTrigger
											class="btn preset-filled-primary-50-950"
											onclick={async () => {
												isActionBlocked = true;
												await workerRequest.insertNewCoach(currentEdit!);
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
			</div>
		</Collapsible.Content>
	</Collapsible>
	<DisplayTable
		{isLoading}
		{getLimit}
		{total}
		data={coaches}
		{offset}
		{isFirstLoaded}
		{currentCount}
		columns={[
			{ header: 'Coach ID', accessor: 'externalCoachId' },
			{ header: 'Name', snippet: nameSearch },
			{ header: 'Phone', accessor: 'phone' },
			{ header: 'Email', accessor: 'email' },
			{ header: 'Actions', snippet: actions },
		]}
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
