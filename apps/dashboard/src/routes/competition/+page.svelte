<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import { cloneDeep, startCase } from 'es-toolkit';
	import { parseInt } from 'es-toolkit/compat';
	import { competitionQuerySchema, stateEnums } from 'usad-scheme';
	import { XIcon, Pencil, Trash, ArrowUpDownIcon, CalendarPlus2, FileSpreadsheetIcon } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api';
	import { states } from 'usad-enums';
	import {timezoneFormatted, timezone} from '$lib/utils/time';
	import { dialogAppearAnimation } from '$lib/utils/animation';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	import DisplayTable from '$lib/components/display-table.svelte';
	import { nonRelativeEventsEnums, relativeEventEnums } from 'usad-scheme/src/constants';
	import type { CompetitionListItem, CompetitionResponseItem } from '$lib/data/types';
	import DateTimePicker from '$lib/components/date-time-picker.svelte';
	const nonRelativeEvents = Object.entries(nonRelativeEventsEnums.def.entries).map(([key, value]) => ({
		shorthand: key,
		original: value
	}));
	const relativeEvents = Object.entries(relativeEventEnums.def.entries).map(([key, value]) => ({
		shorthand: key,
		original: value,
	}));
	function generateNewRelativeEvents() {
		return Object.entries(relativeEventEnums.def.entries).map(([key, value]) => ({
			type: value,
			selected: false,
		}));
	}
	var relativeEventsSelected = $state<{
		type: z.infer<typeof relativeEventEnums>;
		selected: boolean;
	}[]>(generateNewRelativeEvents());
	var isActionBlocked = $state<boolean>(true);
	var isWholeLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(false);
	var limit = $state<number>(10);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var competitions = $state<CompetitionListItem[]>([]);
    var mailAddresses = $state<string[]>(['', '', '']);
	const toggledAll = $derived.by(() => currentEdit!.competitionAvailableStates.length === states.length)
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
	let currentEdit = $state<CompetitionResponseItem | null>(null);
	let currentEditOriginal = $state<CompetitionResponseItem | null>(null);
	const query = $derived.by(() => page.url.searchParams);
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
		const {competitions: result, count} = await workerRequest.competition.get({
			take: getLimit,
			skip: offset,
		});
		const {events} = await workerRequest.event.get({
			where: {
				competitionId: { in: result.map((r) => r.id) }
			}
		})
		competitions = result.map((competition) => ({
			...competition,
			events: events.filter((event) => event.competitionId === competition.id)
		}));
		total = count;
		currentCount = result.length;
		isActionBlocked = false;
	}
	$effect(() => {
		let searchParams = competitionQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			isWholeLoading = true;
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

{#snippet competitionDetail(competitionId: string, existing: boolean)}
<div class="grid grid-rows-[auto_1fr_auto] h-full max-h-[calc(100vh-200px)] overflow-y-scroll">
	<Dialog.Description>
		<label class="label">
			<span class="label-text">Competition Name</span>
			<input type="text" class="input w-full" bind:value={currentEdit!.name} />
		</label>
		<span class="label-text">Competition Date</span>
		<div class="flex flex-row">
			<DateTimePicker bind:value={currentEdit!.startsAt} zone={timezone} afterUpdate={() => {
				(currentEdit!.endsAt < currentEdit!.startsAt) && (currentEdit!.endsAt = new Date(currentEdit!.startsAt));
			}} />
			<DateTimePicker bind:value={currentEdit!.endsAt} zone={timezone} afterUpdate={() => {
				(currentEdit!.endsAt < currentEdit!.startsAt) && (currentEdit!.startsAt = new Date(currentEdit!.endsAt));
			}} />
		</div>
		<span class="label-text">Competition Available States</span>
		<div class="grid grid-flow-row grid-cols-12">
			{#each states as state (state.shorthand)}
				<label class="flex items-center space-x-2 col-span-4">
					<input
						class="checkbox"
						type="checkbox"
						checked={!!currentEdit!.competitionAvailableStates.find(
							(s) => s.state === state.shorthand
						)}
						onchange={(e) => {
							if (e.currentTarget.checked) {
								currentEdit!.competitionAvailableStates.push({
									state: state.shorthand as z.infer<typeof stateEnums>,
									competitionId: competitionId
								});
							} else {
								currentEdit!.competitionAvailableStates =
									currentEdit!.competitionAvailableStates.filter(
										(s) => s.state !== state.shorthand
									);
							}
						}}
					/>
					<p>{state.original}</p>
				</label>
			{/each}
			<label class="flex items-center space-x-2 col-span-4">
				<input
					class="checkbox"
					type="checkbox"
					checked={toggledAll}
					onchange={(e) => {
						if (e.currentTarget.checked) {
							currentEdit!.competitionAvailableStates = states.map((s) => ({
								state: s.shorthand as z.infer<typeof stateEnums>,
								competitionId: competitionId
							}));
						} else {
							currentEdit!.competitionAvailableStates = [];
						}
					}}
				/>
				<p>{toggledAll ? 'Deselect' : 'Select'} All</p>
			</label>
		</div>
		{#if !existing}
			<span class="label-text">Event</span>
			<div class="grid grid-flow-row grid-cols-12">
			{#each nonRelativeEvents as event (event.shorthand)}
				<label class="flex items-center space-x-2 mr-2 col-span-4">
					<input
						type="checkbox"
						class="checkbox"
						checked={currentEdit!.nonRelativeEvents.includes(event.original)}
						onchange={(e) => {
							if (e.currentTarget.checked) {
								currentEdit!.nonRelativeEvents.push(event.original);
							} else {
								currentEdit!.nonRelativeEvents =
									currentEdit!.nonRelativeEvents.filter(
										(ev) => ev !== event.original
									);
							}
						}}
					/>
					<p>{startCase(event.original)}</p>
				</label>
			{/each}
			{#each relativeEventsSelected as event (event.type)}
				<div class="flex items-center space-x-2 mr-2 col-span-4">
					<input
						type="checkbox"
						class="checkbox"
						checked={event.selected}
						onchange={(e) => {
							if (e.currentTarget.checked) {
								event.selected = true;
							} else {
								event.selected = false;
							}
						}}
					/>
					<p>{startCase(event.type)}</p>
				</div>
			{/each}
			</div>
		{/if}
	</Dialog.Description>
</div>
{/snippet}
{#snippet actions(competition: CompetitionResponseItem)}
<Dialog>
	<Dialog.Trigger
		onclick={() => {
			currentEdit = cloneDeep(competition);
			currentEditOriginal = cloneDeep(competition);
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
							>Edit Competition: {name}</Dialog.Title
						>
						<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
							<XIcon class="size-4" />
						</Dialog.CloseTrigger>
					</header>
					{@render competitionDetail(currentEdit.id, true)}
					<footer class="flex justify-end gap-2">
						<Dialog.CloseTrigger
							class="btn preset-filled-primary-50-950"
							onclick={async () => {
								isActionBlocked = true;
								await workerRequest.competition.update({
									competitions: [
										{ id: currentEdit!.id, competition: {
											...currentEdit!,
											competitionAvailableStates: {
												delete: currentEditOriginal!.competitionAvailableStates.filter((originalState) => !currentEdit!.competitionAvailableStates.find((s) => s.state === originalState.state)).map(({state}) => state),
												create: currentEdit!.competitionAvailableStates.filter((state) => !currentEditOriginal!.competitionAvailableStates.find((originalState) => originalState.state === state.state)).map(({state}) => state),
											}
										} }
									]
								});
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
						>Delete Competition: {name}</Dialog.Title
					>
					<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
						<XIcon class="size-4" />
					</Dialog.CloseTrigger>
				</header>
				<Dialog.Description>
					Are you sure you want to delete competition {name}? This action cannot be
					undone.
				</Dialog.Description>
				<footer class="flex justify-end gap-2">
					<Dialog.CloseTrigger
						class="btn preset-filled-danger-50-950"
						onclick={async () => {
							isActionBlocked = true;
							//await workerRequest.deleteCompetitions({ where: {id: {equals: competition.id}} });
							//TODO: implement delete competition api
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
	<h1 class="h1 font-bold">Competition</h1>
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
						relativeEventsSelected = generateNewRelativeEvents();
						currentEdit = {
							id: '',
							name: '',
							startsAt: new Date(),
							competitionAvailableStates: [],
							mutationIndex: 0,
							nonRelativeEvents: [],
							round: 0,
							endsAt: new Date()
						}
						currentEditOriginal = null;
					}}
					class="btn preset-filled w-min"
					disabled={isActionBlocked}><CalendarPlus2 /> Create Competition</Dialog.Trigger
				>
				<Portal>
					{#if currentEdit}
						<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
						<Dialog.Positioner class="fixed inset-0 z-50 flex items-center justify-center p-4">
							<Dialog.Content class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {dialogAppearAnimation}">
								<header class="flex items-center justify-between">
									<Dialog.Title class="text-lg font-bold">Create Competition: {name}</Dialog.Title>
									<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
										<XIcon class="size-4" />
									</Dialog.CloseTrigger>
								</header>
								{@render competitionDetail(currentEdit.id, false)}
								<footer class="flex justify-end gap-2">
									<Dialog.CloseTrigger
										class="btn preset-filled-primary-50-950"
										onclick={async () => {
											isActionBlocked = true;
											await workerRequest.competition.create({
												competitions: [{
													...currentEdit!,
													competitionAvailableStates: currentEdit!.competitionAvailableStates.map((s) => ({
														state: s.state,
													})),
													events: relativeEvents.map((e, j) => ({
														name: startCase(e.original),
														type: e.original,
														mutationIndex: j,
													})),
													schools: [],
												}]
											});
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
			<button class="btn preset-filled w-min" onclick={() => {
				
			}}><FileSpreadsheetIcon/>Export As CSV</button>
		</Collapsible.Content>
	</Collapsible>
	<DisplayTable
		{total}
		{offset}
		{currentCount}
		{isFirstLoaded}
		{getLimit}
		getId={(item) => item.id}
		isLoading={isWholeLoading}
		data={competitions}
		columns={[
			{ header: 'Competition Name', accessor: 'name' },
			{ header: 'Competition Round', cell: ({round}) => round + 1 },
			{
				header: 'Competition Date',
				cell: ({startsAt}) => {
					return `${moment(startsAt).tz(timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone ${timezoneFormatted}`;
				}
			},
			{
				header: 'Competition Available States',
				cell: (competition) => {
					if (competition.competitionAvailableStates.length > states.length / 2) {
						return `All${
							competition.competitionAvailableStates.length < states.length
								? ` except for ${states
										.filter(
											(s) =>
												!competition.competitionAvailableStates
													.map(({ state }) => state)
													.includes(s.shorthand as z.infer<typeof stateEnums>)
										)
										.map((s) => s.shorthand)
										.join(', ')}`
								: ''
						}`;
					} else {
						return competition.competitionAvailableStates
							.map(({ state }) => states.find((s) => s.shorthand === state)?.shorthand)
							.join(', ');
					}
				}
			},
			{
				header: 'Competition Event Types',
				cell: (competition) => {
					const eventTypes = [...competition.nonRelativeEvents, competition.events.map((e) => e.type)].flat().map((word) => startCase(word));
					return eventTypes.join(', ');
				}
			},
			{ header: 'Actions', snippet: actions }
		]}
	/>
	<PaginateTable
		getLimit={getLimit}
		total={total}
		getCurrentPage={getCurrentPage}
		{setCurrentPage}
	/>
</div>
