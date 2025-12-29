<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Dialog, Pagination, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { competitionQuerySchema, competitionResponseItemSchema, stateEnums } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, MailIcon, XIcon, Pencil, Trash } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
    import Editor from '$lib/components/editor.svelte';
	import { resolve } from '$app/paths';
	import { workerRequest } from '$lib/api/test';
	import { states } from 'usad-enums';
	import SveltyPicker, { formatDate, parseDate } from 'svelty-picker';
	import { en} from 'svelty-picker/i18n';
	type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var competitions = $state<CompetitionResponseItem[]>([]);
	var timezone = moment.tz.guess();
    var mailAddresses = $state<string[]>(['', '', '']);
    const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
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
		isLoading = true;
		const {result, count} = await workerRequest.getCompetition({
			take: getLimit,
			skip: offset,
		});
		competitions = result;
		total = count;
		currentCount = result.length;
		isLoading = false;
	}
	$effect(() => {
		let searchParams = competitionQuerySchema.safeParse(
			Object.fromEntries(page.url.searchParams.entries())
		);
		if (searchParams.success) {
			fetch();
		}
	})
</script>

<div class="flex h-full w-full flex-col gap-y-3.5 p-8">
	<h1 class="h1 font-bold">Competition</h1>
	<table class="table">
		<thead>
			<tr>
				<td>Competition Name</td>
				<td>Competition Date</td>
				<td>Competition Available States</td>
				<td>Actions</td>
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
				{#each competitions as competition (competition.id)}
					{@const { name, startsAt } = competition}
					{@const editor: {editor: Editor | undefined} = { editor: undefined } }
					<tr>
						<td>{name}</td>
						<td
							>{moment(startsAt, timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone {timezone
								.split('/')
								.reverse()
								.join(', ')}</td
						>
						<td>
							{competition.competitionAvailableStates.length > states.length / 2
								? `All${
										competition.competitionAvailableStates.length < states.length
											? ` except for ${states
													.filter(
														(s) =>
															!competition.competitionAvailableStates
																.map(({ state }) => state)
																.includes(s.shorthand as z.infer<typeof stateEnums>)
													)
													.map((s) => s.original)
													.join(', ')}`
											: ''
									}`
								: competition.competitionAvailableStates.join(', ')}
						</td>
						<td>
							<Dialog
								onOpenChange={({ open }) => {
									console.log('open', open);
								}}
							>
								<Dialog.Trigger class="btn preset-filled"><MailIcon />Send Mails</Dialog.Trigger>
								<Portal>
									<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
									<Dialog.Positioner
										class="fixed inset-0 z-50 flex items-center justify-center p-4"
									>
										<Dialog.Content
											class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {animation}"
										>
											<header class="flex items-center justify-between">
												<Dialog.Title class="text-lg font-bold">Send mail</Dialog.Title>
												<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
													<XIcon class="size-4" />
												</Dialog.CloseTrigger>
											</header>
											<Dialog.Description>
												{#each mailAddresses as address, i (i)}
													<p>{i + 1}</p>
												{/each}
												<Editor bind:this={editor.editor} />
											</Dialog.Description>
											<footer class="flex justify-end gap-2">
												<Dialog.CloseTrigger
													onclick={async () => {
														console.log(editor.editor?.quill.getSemanticHTML());
													}}
													class="btn preset-filled-primary-50-950">Send</Dialog.CloseTrigger
												>
												<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
											</footer>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog>
							<Dialog>
								<Dialog.Trigger onclick={() => console.log('Edit clicked')} class="btn preset-filled"><Pencil />Edit</Dialog.Trigger>
								<Portal>
									<Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
									<Dialog.Positioner
										class="fixed inset-0 z-50 flex items-center justify-center p-4">
										<Dialog.Content
											class="space-y-4 card bg-surface-100-900 p-4 shadow-xl {animation}"
										>
											<header class="flex items-center justify-between">
												<Dialog.Title class="text-lg font-bold">Edit Competition: {name}</Dialog.Title>
												<Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
													<XIcon class="size-4" />
												</Dialog.CloseTrigger>
											</header>
											<Dialog.Description>
												<label class="label">
													<span class="label-text">Competition Name</span>
													<input type="text" class="input w-full" bind:value={competition.name} />
												</label>
												<label class="label">
													<span class="label-text">Competition Date</span>
													<SveltyPicker
														mode="datetime"
														format="mm/dd/yyyy hh:ii:ss"
														inputClasses="input w-full"
														bind:value={
															() => {
																return formatDate(startsAt, 'mm/dd/yyyy hh:ii:ss', en, 'standard');
															},
															(v) => {
																competition.startsAt = parseDate(v, 'mm/dd/yyyy hh:ii:ss', en, 'standard');
															}
														}
													/>
													<div class="grid grid-flow-row grid-cols-12">
													{#each states as state (state.shorthand)}
														<label class="flex items-center space-x-2 col-span-4">
															<input class="checkbox" type="checkbox" checked={!!competition.competitionAvailableStates.find(s => s.state === state.shorthand)} onchange={(e) => {
																if (e.currentTarget.checked) {
																	competition.competitionAvailableStates.push({ state: state.shorthand as z.infer<typeof stateEnums>, competitionId: competition.id });
																} else {
																	competition.competitionAvailableStates = competition.competitionAvailableStates.filter(s => s.state !== state.shorthand);
																}
															}}/>
															<p>{state.original}</p>
														</label>
													{/each}
													</div>
												</label>
											</Dialog.Description>
											<footer class="flex justify-end gap-2">
												<Dialog.CloseTrigger class="btn preset-filled-primary-50-950">Save</Dialog.CloseTrigger>
												<Dialog.CloseTrigger class="btn preset-tonal">Close</Dialog.CloseTrigger>
											</footer>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog>
							<Dialog>
								<Dialog.Trigger class="btn preset-filled-danger-50-950"><Trash />Delete</Dialog.Trigger>
							</Dialog>
						</td>
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
