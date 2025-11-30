<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { goto } from '$app/navigation';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { page } from '$app/state';
	import { Dialog, Pagination, Portal } from '@skeletonlabs/skeleton-svelte';
	import _ from 'lodash';
	import { competitionResponseItemSchema } from 'usad-scheme';
	import { ArrowLeftIcon, ArrowRightIcon, MailIcon, XIcon } from '@lucide/svelte';
	import moment from 'moment-timezone';
	import z from 'zod';
    import Editor from '$lib/components/editor.svelte';
	type CompetitionResponseItem = z.infer<typeof competitionResponseItemSchema>;
	var isLoading = $state<boolean>(true);
	var isFirstLoaded = $state<boolean>(true);
	var limit = $state<number>(10);
	var pagination = $state<number>(0);
	var offset = $derived.by(() => pagination * limit);
	var total = $state<number>(0);
	var currentCount = $state<number>(0);
	var competitions = $state<CompetitionResponseItem[]>([]);
	var timezone = moment.tz.guess();
    var mailAddresses = $state<string[]>(['', '', '']);
    const animation =
		'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
	async function fetch(/*searchParams: z.infer<typeof schoolQuerySchema>*/) {
		isLoading = true;
		//TODO: server fetch
		competitions = _.range(0, 10).map((e) => ({
			name: 'Midwest US Science High School',
			startsAt: new Date(),
			endsAt: new Date(),
			id: `${e}`,
			competitionId: ''
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
	<h1 class="h1 font-bold">Competition</h1>
	<table class="table">
		<thead>
			<tr>
				<td>Competition Name</td>
				<td>Competition Date</td>
                <td>Send Mails</td>
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
				{#each competitions as event (event.id)}
					{@const { name, startsAt } = event}
					<tr>
						<td>{name}</td>
						<td
							>{moment(startsAt, timezone).format('MM-DD-YYYY hh:mm:ss')} at timezone {timezone
								.split('/')
								.reverse()
								.join(', ')}</td
						>
                        <td>
                            <Dialog onOpenChange={({open}) => {console.log('open', open);}}>
								<Dialog.Trigger class="btn-icon preset-filled"><MailIcon /></Dialog.Trigger>
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
                                                <Editor />
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
				<td colspan="2">Total</td>
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
