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
	type SchoolResponseItem = z.infer<typeof schoolResponse>['school'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);
	var offset = $derived.by(() => pagination * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var schools = $state<SchoolResponseItem[]>([]);
	var schoolNameQueryString = $state<string>();
	var debouncedSchoolNameQueryString = $state<string>();
	var externalSchoolIdQueryString = $state<string>();
	var debouncedExternalSchoolIdQueryString = $state<string>();
		//eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function fetch(searchParams: z.infer<typeof schoolQuerySchema>) {
		isLoading = true;
		//TODO: server fetch
		schools = _.range(0, 10).map((e) => ({
			isVirtual: false,
			name: 'Midwest US Science High School',
			streetAddress: '47 W 13th St',
			city: 'New York',
			state: 'NY',
			zipCode: '10011',
			id: `${e}`,
			externalSchoolId: '10',
			principalEmail: 'random@domain.com',
			phone: '(123)456-7890',
			principalName: 'Lorem Ipsum',
			division: e % 5 + 1
		}) as SchoolResponseItem);
		isLoading = false;
	}
	$effect(() => {
		let searchParams = schoolQuerySchema.safeParse(
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
					oninput={_.debounce(() => {
						debouncedSchoolNameQueryString = schoolNameQueryString;
					}, 500)}
					bind:value={schoolNameQueryString}
				/>
			</label>
			<label class="label">
				<span class="label-text">School Id</span>
				<input
					class="input"
					oninput={_.debounce(() => {
						debouncedExternalSchoolIdQueryString = externalSchoolIdQueryString;
					}, 500)}
					bind:value={externalSchoolIdQueryString}
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
				{#each _.range(0, limit, 1) as n (n)}
					<tr>
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
					{@const nameSplit = splitStringForQueryHighlight(name, debouncedSchoolNameQueryString)}
					{@const externalSchoolIdSplit = splitStringForQueryHighlight(
						externalSchoolId,
						debouncedExternalSchoolIdQueryString
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
