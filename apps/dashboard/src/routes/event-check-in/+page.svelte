<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Collapsible, Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { eventCheckedInItem, eventCheckInQuerySchema, eventResponseItemSchema, studentResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, CalendarPlus2 } from '@lucide/svelte';
	import z from 'zod';
	import moment from 'moment-timezone';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import PaginateTable from '$lib/components/paginate-table.svelte';
	type EventCheckedInItem = z.infer<typeof eventCheckedInItem>;
	type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
	type EventResponseItem = z.infer<typeof eventResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);//TODO: Remove variables related to pagination
	var offset = $derived.by(() => pagination * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var checkIns = $state<EventCheckedInItem[]>([]);
	var students = $state<StudentResponseItem[]>([]);
	var events = $state<EventResponseItem[]>([]);
	var aggregated = $derived.by(() => {
		return checkIns.map((checkIn) => {
			const event = events.find((e) => e.id === checkIn.eventId);
			const student = students.find((s) => s.id === checkIn.studentId);
			return {
				...checkIn,
				eventName: event ? event.name : 'Unknown Event',
				eventId: event ? event.id : 'Unknown Event',
				studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown Student',
				studentExternalId: student ? student.externalStudentId : 'Unknown Student',
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
	async function fetch(/*searchParams: z.infer<typeof schoolQuerySchema>*/) {
		isLoading = true;
		//TODO: server fetch
		const { result, count } = await workerRequest.getEventCheckIn({
			take: getLimit,
			skip: offset,
		});
		const { result: eventResult } = await workerRequest.getEvents({
			where: {
				id: {
					in: result.map((e) => e.eventId)
				}
			},
			take: getLimit
		});
		const { result: studentResult } = await workerRequest.getStudent({
			where: {
				id: {
					in: result.map((e) => e.studentId)
				}
			},
			take: getLimit
		});
		checkIns = result;
		events = eventResult;
		students = studentResult;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = eventCheckInQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch();
		}
	});
</script>

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Check In</h1>
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
					class="btn preset-filled w-min"><CalendarPlus2 />Assign Student To Event</Dialog.Trigger
				>
				<Portal>
					test
				</Portal>
			</Dialog>
		</Collapsible.Content>
	</Collapsible>
	<table class="table">
		<thead>
			<tr>
				<td>Event</td>
				<td>Student</td>
				<td>Checked In At</td>
			</tr>
		</thead>
		<tbody>
			{#if isLoading}
				{#each _.range(0, limit, 1) as n (n)}
					<tr>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
					</tr>
				{/each}
			{:else}
				{#each aggregated as checkIn (`${checkIn.eventId}-${checkIn.studentId}`)}
					{@const { checkedInAt, eventName, studentName, studentExternalId } = checkIn}
					<tr>
						<td>{eventName}</td>
						<td>{studentName} ({studentExternalId})</td>
						<td
							>{!checkedInAt
								? 'Not yet'
								: `${moment(checkedInAt).format('MM-DD-YYYY hh:mm:ss')} at timezone ${timezone.split('/').reverse().join(', ')}`}</td
						>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="2">Total</td>
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
