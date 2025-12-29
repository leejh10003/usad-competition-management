<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Collapsible, Pagination } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { splitStringForQueryHighlight } from '$lib/utils/string';
	import { schoolQuerySchema, schoolResponse } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon } from '@lucide/svelte';
	import z from 'zod';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import romans, { romanize } from 'romans';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	type SchoolResponseItem = z.infer<typeof schoolResponse>['school'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
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
						division
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
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="5">Total</td>
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
