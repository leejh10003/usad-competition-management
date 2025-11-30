<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Dialog, Portal, Pagination } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { division, studentQuerySchema, studentResponseSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, XIcon } from '@lucide/svelte';
	import z from 'zod';
	import Pdf from '$lib/components/pdf.svelte';
	import { workerRequest } from '$lib/api/test';
	type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var currentPage = $state<number>(1);
	var offset = $derived.by(() => (currentPage - 1) * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var students = $state<StudentResponseItem[]>([]);
	const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	async function fetch(searchParams: z.infer<typeof studentQuerySchema>) {
		isLoading = true;
		//TODO: server fetch
		const {result, count} = await workerRequest.getStudent({
			take: limit,
			skip: offset
		});
		students = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = studentQuerySchema.safeParse(
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
	<h1 class="h1 font-bold">Student</h1>
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
				{#each _.range(0, limit, 1) as n (n)}
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
	<Pagination count={total} pageSize={limit} page={currentPage}>
		<Pagination.PrevTrigger onclick={() => currentPage--}><ArrowLeftIcon class="size-4" /></Pagination.PrevTrigger>
		<Pagination.Context>
			{#snippet children(pagination)}
				{#each pagination().pages as page, index (page)}
					{#if page.type === 'page'}
						<Pagination.Item onclick={(v) => {currentPage = page.value}} {...page}>
							{page.value}
						</Pagination.Item>
					{:else}
						<Pagination.Ellipsis {index}>&#8230;</Pagination.Ellipsis>
					{/if}
				{/each}
			{/snippet}
		</Pagination.Context>
		<Pagination.NextTrigger onclick={() => {currentPage++}}><ArrowRightIcon class="size-4" /></Pagination.NextTrigger>
	</Pagination>
</div>
