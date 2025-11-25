<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { eventResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
	type EventResponseItem = z.infer<typeof eventResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);
	var offset = $derived.by(() => pagination * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var events = $state<EventResponseItem[]>([]);
	var timezone = moment.tz.guess();
	async function fetch(/*searchParams: z.infer<typeof schoolQuerySchema>*/) {
		isLoading = true;
		//TODO: server fetch
		events = _.range(0, 10).map((e) => ({
			name: 'Midwest US Science High School',
			startsAt: new Date(),
			id: `${e}`
		}));
		isLoading = false;
	}
	$effect(() => {
		//let searchParams = schoolQuerySchema.safeParse(Object.fromEntries(page.url.searchParams.entries()));
		//if (searchParams.success){
		fetch(/*searchParams.data*/);
		//} else {
		//    console.log('not using');
		//}
	});
	/*function changeFilter() {
		const searchParams = page.url.searchParams;
		searchParams.set('test', 'true');
		goto(`?${searchParams.toString()}`);
	}*/
</script>

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Event</h1>
	<table class="table">
		<thead>
			<tr>
				<td>Event Name</td>
				<td>Event Date</td>
			</tr>
		</thead>
		<tbody>
			{#if isLoading}
				{#each _.range(0, limit, 1) as n (n)}
					<tr>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
					</tr>
				{/each}
			{:else}
				{#each events as event (event.id)}
					{@const { name, startsAt } = event}
					<tr>
						<td>{name}</td>
						<td
							>{moment(startsAt, timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone {timezone
								.split('/')
								.reverse()
								.join(', ')}</td
						>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="1">Total</td>
				{#if isFirstLoaded}
					<td colspan="1">{offset + 1} - {offset + currentCount}/{total} Elements</td>
				{:else}
					<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
				{/if}
			</tr>
		</tfoot>
	</table>
	<Pagination count={total} pageSize={limit} page={pagination}>
		<Pagination.PrevTrigger><ArrowLeftIcon class="size-4" /></Pagination.PrevTrigger>
		<Pagination.Context>
			{#snippet children(pagination)}
				{#each pagination().pages as page, index (page)}
					{#if page.type === 'page'}
						<Pagination.Item {...page}>
							{page.value}
						</Pagination.Item>
					{:else}
						<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
					{/if}
				{/each}
			{/snippet}
		</Pagination.Context>
		<Pagination.NextTrigger><ArrowRightIcon class="size-4" /></Pagination.NextTrigger>
	</Pagination>
</div>
