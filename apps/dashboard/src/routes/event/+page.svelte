<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Collapsible, Dialog, Listbox, Portal, useListCollection } from '@skeletonlabs/skeleton-svelte';
	import _, { clone, cloneDeep, debounce } from 'lodash';
	import { eventQuerySchema, eventResponseItemSchema, competitionResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2, Pencil, Trash, XIcon } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
	import { resolve } from '$app/paths';
	import SveltyPicker, { formatDate, parseDate } from 'svelty-picker';
	import { en } from 'svelty-picker/i18n';
	import { workerRequest } from '$lib/api/test';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import { timezoneFormatted } from '$lib/utils/time';
	import SearchSelect from '$lib/components/search-select.svelte';
	import TextInput from '$lib/components/text-input.svelte';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import type { CompetitionResponseItem, EventAggregatedItem, EventResponseItem } from '$lib/data/types';
	var isActionBlocked = $state<boolean>(true);
	var isWholeLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(false);
	var limit = $state<number>(10);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var events = $state<EventAggregatedItem[]>([]);
	var competitions = $state<CompetitionResponseItem[]>([]);
	let currentEdit = $state<EventResponseItem | null>(null);

	const competitionCollection = $derived(
		useListCollection({
			items: competitions,
			itemToString: (item) => item.name,
			itemToValue: (item) => item.id,
		}),
	);

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
	const fetchCompetitionWithDebounce = debounce(fetchCompetitions, 300);
	var timezone = moment.tz.guess();
	const query = $derived.by(() => page.url.searchParams);
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
	async function fetch() {
		isActionBlocked = true;
		const {result, count} = await workerRequest.getEvents({
			take: getLimit,
			skip: offset,
		});
		const { result: competitionResult } = await workerRequest.getCompetition({
			where: {
				id: {
					in: result.map((e) => e.competitionId)
				}
			}
		});
		events = result.map((event) => {
			const competition = competitionResult.find((comp) => comp.id === event.competitionId);
			return {
				event,
				competition: competition!
			};
		});
		total = count;
		currentCount = result.length;
		isActionBlocked = false;
	}
	$effect(() => {
		let searchParams = eventQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch().then(() => {
				if (isWholeLoading) {
					isWholeLoading = false;
				}
				if (!isFirstLoaded) {
					isFirstLoaded = true;
				}
			});
		}
	})
</script>
{#snippet eventDetail(eventId: string)}
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
		<TextInput
			propName="Event Name"
			bind:inputValue={currentEdit!.name}
		/>
		<label class="label">
			<span class="label-text">Event Date</span>
			<p class="grid">
				<SveltyPicker
					mode="datetime"
					isRange={true}
					format="mm/dd/yyyy hh:ii:ss"
					inputClasses="input w-full"
					bind:value={
						() => {
							return [formatDate(currentEdit!.startsAt, 'mm/dd/yyyy hh:ii:ss', en, 'standard'), formatDate(currentEdit!.endsAt, 'mm/dd/yyyy hh:ii:ss', en, 'standard')];
						},
						([startsAt, endsAt]) => {
							currentEdit!.startsAt = parseDate(startsAt, 'mm/dd/yyyy hh:ii:ss', en, 'standard');
							currentEdit!.endsAt = parseDate(endsAt, 'mm/dd/yyyy hh:ii:ss', en, 'standard');
						}
					}
				/>
			</p>
		</label>
	</Dialog.Description>
</div>
{/snippet}
{#snippet actionBlock(item: EventAggregatedItem)}
	{@const {event, competition} = item }
	{@const { name, id } = event }
	<div>
		<Dialog>
			<Dialog.Trigger
				onclick={() =>{
					currentEdit = cloneDeep(event);
					competitions = [competition];
				}}
				class="btn preset-filled w-min"
				disabled={isActionBlocked}><Pencil />Edit</Dialog.Trigger
			>
			<Portal>
				{#if currentEdit}
					<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
					<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
						<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
							<header class="flex items-center justify-between">
								<Dialog.Title class="text-lg font-bold">Edit Event: {name}</Dialog.Title>
								<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
									<XIcon class="size-4" />
								</Dialog.CloseTrigger>
							</header>
							{@render eventDetail(currentEdit.id)}
							<footer class="flex justify-end gap-2">
								<Dialog.CloseTrigger
									class="btn preset-filled-primary-50-950"
									onclick={async () => {
										isActionBlocked = true;
										await workerRequest.updateEvent([{
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
								>Delete Event: {name}</Dialog.Title
							>
							<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
								<XIcon class="size-4" />
							</Dialog.CloseTrigger>
						</header>
						<Dialog.Description>
							Are you sure you want to delete event {name}? This action cannot be
							undone.
						</Dialog.Description>
						<footer class="flex justify-end gap-2">
							<Dialog.CloseTrigger
								class="btn preset-filled-danger-50-950"
								onclick={async () => {
									isActionBlocked = true;
									await workerRequest.deleteEvent({ where: {id: {equals: id}} });
									await fetch();
								}}>Delete</Dialog.CloseTrigger
							>
							<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
						</footer>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	</div>
{/snippet}
<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Event</h1>
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
							id: workerRequest.generateNewCompetitionId(), //TODO Change to generateNewEventId
							name: '',
							startsAt: new Date(),
							competitionId: '',
							type: 'Interview',
							mutationIndex: 0,
							endsAt: new Date()
						})}
					class="btn preset-filled w-min"
					disabled={isActionBlocked}><CalendarPlus2 /> Create Event</Dialog.Trigger
				>
				<Portal>
					{#if currentEdit}
						<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
						<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
							<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
								<header class="flex items-center justify-between">
									<Dialog.Title class="text-lg font-bold">Edit Event: {name}</Dialog.Title>
									<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
										<XIcon class="size-4" />
									</Dialog.CloseTrigger>
								</header>
								{@render eventDetail(currentEdit.id)}
								<footer class="flex justify-end gap-2">
									<Dialog.CloseTrigger
										class="btn preset-filled-primary-50-950"
										onclick={async () => {
											isActionBlocked = true;
											await workerRequest.insertNewEvent(currentEdit!);
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
		{isFirstLoaded}
		isLoading={isWholeLoading}
		{getLimit}
		{offset}
		{total}
		{currentCount}
		getId={(item) => item.event.id}
		data={events}
		columns={[
			{
				header: 'Event Name',
				cell: ({event}) => {
					return event.name;
				}
			},
			{
				header: 'Event Type',
				accessor: 'event.type'
			},
			{
				header: 'Event Date',
				accessor: 'event.startsAt',
				cell: ({event: {startsAt}}) => {
					return `${moment(startsAt, timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone ${timezoneFormatted}`;
				}
			},
			{
				header: 'Competition Name',
				accessor: 'competition.name'
			},
			{
				header: 'Actions',
				snippet: actionBlock
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
