<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Dialog, Portal, Pagination, Collapsible } from '@skeletonlabs/skeleton-svelte';
	import _, { debounce } from 'lodash';
	import { studentQuerySchema, studentResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, ArrowUpDownIcon, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import Pdf from '$lib/components/pdf.svelte';
	import { workerRequest } from '$lib/api/test';
	import { resolve } from '$app/paths';
	type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var students = $state<StudentResponseItem[]>([]);
	var currentCount = $state<number>(0);
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
	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
	async function fetch() {
		isLoading = true;
		//TODO: server fetch
		const {result, count} = await workerRequest.getStudent({
			take: getLimit,
			skip: offset
		});
		students = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		const entries = Object.fromEntries(page.url.searchParams.entries());
		for (const [key, value] of Object.entries(entries)) {
			try {
				entries[key] = decodeURIComponent(value as string);
			} catch (e) {
				entries[key] = value;
			}
		}
		let searchParams = studentQuerySchema.safeParse(
			entries
		);
		if (searchParams.success) {
			fetch();
		} else {
			//TODO
		}
	});
</script>

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Student</h1>
	<Collapsible class="rounded-xs border border-primary-100 p-4">
		<div class="flex w-full items-center justify-between">
			<p class="font-bold">Actions</p>
			<Collapsible.Trigger class="btn-icon hover:preset-tonal">
				<ArrowUpDownIcon class="size-4" />
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="grid w-full grid-cols-3 gap-1">
			<label class="label">
				<span class="label-text">Students Per Page</span>
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
				<td>ID #</td>
				<td>Name</td>
				<td>Address</td>
				<td>GPA</td>
				<td>Group</td>
				<td>Attachment</td>
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
				{#each students as student (student.id)}
					{@const {
						firstName,
						lastName,
						streetAddress,
						city,
						state,
						zipCode,
						gpa,
						division,
						externalStudentId,
						attachmentOnRegistering
					} = student}
					<tr>
						<td>{externalStudentId}</td>
						<td>{firstName} {lastName}</td>
						<td>{streetAddress}{streetAddress ? ', ' : ''}{city}{city ? ', ' : ''}{state}{state ? ', ' : ''}{zipCode ? '(' : ''}{zipCode}{zipCode ? ')' : ''}</td>
						<td>{gpa}</td>
						<td
							>{division === 'H'
								? 'Honors'
								: division === 'S'
									? 'Scholastic'
									: division === 'V'
										? 'Varsity'
										: 'Not assigned'}</td
						>
						<td>
							<Dialog>
								<Dialog.Trigger disabled={!attachmentOnRegistering} class="btn preset-filled">Trigger</Dialog.Trigger>
								<Portal>
									<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
									<Dialog.Positioner
										class="fixed inset-0 z-50 flex items-center justify-center p-4"
									>
										<Dialog.Content
											class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {animation}"
										>
											<header class="flex items-center justify-between">
												<Dialog.Title class="text-lg font-bold">Pdf Viewer</Dialog.Title>
												<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
													<XIcon class="size-4" />
												</Dialog.CloseTrigger>
											</header>
											<Dialog.Description>
												<Pdf data={attachmentOnRegistering ?? ''} />
											</Dialog.Description>
											<footer class="flex justify-end gap-2">
												<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
											</footer>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog>
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
						<Pagination.Item onclick={(v) => {setCurrentPage(page.value)}} {...page}>
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
