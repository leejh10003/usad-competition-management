<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Collapsible, Pagination } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { coachQuerySchema, coachResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon } from '@lucide/svelte';
	import z from 'zod';
	import { splitStringForQueryHighlight } from '$lib/utils/string';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	type CoachResponseItem = z.infer<typeof coachResponseSchema>['coach'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
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
	async function fetch(searchParams: z.infer<typeof coachQuerySchema>) {
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
			fetch(searchParams.data);
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
		</Collapsible.Content>
	</Collapsible>
	<table class="table">
		<thead>
			<tr>
				<td>Coach ID</td>
				<td>Name</td>
				<td>Phone</td>
				<td>Email</td>
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
				{#each coaches as coach (coach.id)}
					{@const { externalCoachId, firstName, lastName, email, phone } = coach}
					{@const firstNameSplit = splitStringForQueryHighlight(
						firstName,
						getCoachFirstNameQueryString
					)}
					{@const lastNameSplit = splitStringForQueryHighlight(
						lastName,
						getCoachLastNameQueryString
					)}
					{@const externalCoachlIdSplit = splitStringForQueryHighlight(
						externalCoachId,
						getExternalCoachIdQueryString
					)}
					<tr>
						<td>
							<div class="flex flex-row">
								{#each externalCoachlIdSplit as { originalQuery, originalString }, i (i)}
									<span class="whitespace-pre">{originalString}</span>
									<span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
								{/each}
							</div>
						</td>
						<td>
							<div class="flex flex-row">
								{#each firstNameSplit as { originalQuery, originalString }, i (i)}
									<span class="whitespace-pre">{originalString}</span>
									<span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
								{/each}
								&nbsp;
								{#each lastNameSplit as { originalQuery, originalString }, i (i)}
									<span class="whitespace-pre">{originalString}</span>
									<span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
								{/each}
							</div>
						</td>
						<td><a href={`tel:${phone}`}>{phone}</a></td>
						<td><a href={`mailto:${email}`}>{email}</a></td>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="3">Total</td>
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
