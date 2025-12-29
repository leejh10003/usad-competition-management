<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Pagination } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { teamQuerySchema, teamResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
	import z from 'zod';
	import { romanize } from 'romans';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	type TeamResponseItem = z.infer<typeof teamResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var teams = $state<TeamResponseItem[]>([]);
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
	async function fetch(searchParams: z.infer<typeof teamQuerySchema>) {
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
			fetch(searchParams.data);
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

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Team</h1>
	<table class="table">
		<thead>
			<tr>
				<td>ID #</td>
				<td>School ID #</td>
				<td>Division</td>
			</tr>
		</thead>
		<tbody>
			{#if isLoading}
				{#each _.range(0, getLimit, 1) as n (n)}
					<tr>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
						<td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
					</tr>
				{/each}
			{:else}
				{#each teams as team (team.id)}
					{@const { schoolId, externalTeamId, division } = team}
					<tr>
						<td>{externalTeamId}</td>
						<td>{schoolId}</td>
						<td>{division ? romanize(division) : '-'}</td>
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
	<Pagination count={total} pageSize={getLimit} page={getCurrentPage}>
		<Pagination.PrevTrigger onclick={() => setCurrentPage(getCurrentPage - 1)}><ArrowLeftIcon class="size-4" /></Pagination.PrevTrigger>
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
		<Pagination.NextTrigger onclick={() => setCurrentPage(getCurrentPage + 1)}><ArrowRightIcon class="size-4" /></Pagination.NextTrigger>
	</Pagination>
</div>
