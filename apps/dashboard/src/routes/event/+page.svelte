<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Collapsible, Dialog, Pagination, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { eventQuerySchema, eventResponseItemSchema, competitionResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2, XIcon } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
	import { resolve } from '$app/paths';
	import SveltyPicker, { formatDate, parseDate } from 'svelty-picker';
	import { en } from 'svelty-picker/i18n';
	import { workerRequest } from '$lib/api/test';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import { timezoneFormatted } from '$lib/utils/time';
	type EventResponseItem = z.infer<typeof eventResponseItemSchema>;
	type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
	var isActionBlocked = $state<boolean>(true);
	var isWholeLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(false);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var events = $state<EventResponseItem[]>([]);
	var competitions = $state<CompetitionResponseItem[]>([]);
	let currentEdit = $state<EventResponseItem | null>(null);
	var aggregated = $derived.by(() => {
		return events.map((event) => {
			const competition = competitions.find((comp) => comp.id === event.competitionId);
			return {
				...event,
				competitionName: competition ? competition.name : 'Unknown Competition'
			};
		});
	});
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
		events = result;
		competitions = competitionResult;
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
	<Dialog.Description>
		<label class="label">
			<span class="label-text">Event Name</span>
			<input type="text" class="input w-full" bind:value={currentEdit!.name} />
		</label>
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
									<Dialog.Title class="text-lg font-bold">Edit Competition: {name}</Dialog.Title>
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
											//await workerRequest.insertNewCompetition(currentEdit!);
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
				<td>Event Name</td>
				<td>Event Date</td>
				<td>Competition Name</td>
			</tr>
		</thead>
		<tbody>
			{#if isWholeLoading}
				{#each _.range(0, limit, 1) as n (n)}
					<tr>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
					</tr>
				{/each}
			{:else}
				{#each aggregated as event (event.id)}
					{@const { name, startsAt, competitionName } = event}
					<tr>
						<td>{name}</td>
						<td
							>{moment(startsAt, timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone {timezoneFormatted}</td
						>
						<td>{competitionName}</td>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="2">Total</td>
				{#if isFirstLoaded}
					<td colspan="2">{offset + 1} - {offset + currentCount}/{total} Elements</td>
				{:else}
					<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
				{/if}
			</tr>
		</tfoot>
	</table>
	<Pagination count={total} pageSize={getLimit} page={getCurrentPage}>
		<Pagination.PrevTrigger onclick={() => setCurrentPage(getCurrentPage - 1)}
			><ArrowLeftIcon class="size-4" /></Pagination.PrevTrigger
		>
		<Pagination.Context>
			{#snippet children(pagination)}
				{#each pagination().pages as page, index (page)}
					{#if page.type === 'page'}
						<Pagination.Item onclick={() => setCurrentPage(page.value)} {...page}>
							{page.value}
						</Pagination.Item>
					{:else}
						<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
					{/if}
				{/each}
			{/snippet}
		</Pagination.Context>
		<Pagination.NextTrigger onclick={() => setCurrentPage(getCurrentPage + 1)}
			><ArrowRightIcon class="size-4" /></Pagination.NextTrigger
		>
	</Pagination>
</div>
