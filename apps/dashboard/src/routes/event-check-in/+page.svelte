<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { Pagination } from '@skeletonlabs/skeleton-svelte';
    import _ from 'lodash';
    import { eventCheckedInItem } from 'usad-scheme';
    import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
    import z from 'zod'
    import moment from 'moment-timezone';
    type EventCheckedInItem = z.infer<typeof eventCheckedInItem>;
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var limit = $state<number>(10);
    var pagination = $state<number>(0);
    var offset = $derived.by(() => pagination * limit);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    var checkIns = $state<EventCheckedInItem[]>([]);
    var timezone = moment.tz.guess();
    async function fetch(/*searchParams: z.infer<typeof schoolQuerySchema>*/) {
        isLoading = true;
        //TODO: server fetch
        checkIns = _.range(0, 10).map((_) => ({
            studentId: "asdf",
            eventId: "asdf",
            checkedInAt: new Date(),
        }));
        isLoading = false;
    }
    $effect(() => {
        //let searchParams = schoolQuerySchema.safeParse(Object.fromEntries(page.url.searchParams.entries()));
        //if (searchParams.success){
            fetch(/*searchParams.data*/);
        //} else {
            //TODO:
        //}
    })
    function changeFilter(){
        const searchParams = page.url.searchParams;
        searchParams.set('test', 'true');
        goto(`?${searchParams.toString()}`);
    }
</script>
<div class="flex flex-col h-full w-full p-8 gap-y-3.5">
    <h1 class="h1 font-bold">Check In</h1>
    <table class="table">
        <thead>
            <tr>
                <td>Event ID #</td>
                <td>Student ID #</td>
                <td>Checked In At</td>
            </tr>
        </thead>
        <tbody>
            {#if isLoading}
            {#each _.range(0, limit, 1) as n}
                <tr>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                </tr>
            {/each}
            {:else}
                {#each checkIns as checkIn}
                {@const { checkedInAt, studentId, eventId } = checkIn}
                <tr>
                    <td>{eventId}</td>
                    <td>{studentId}</td>
                    <td>{!checkedInAt ? 'Not yet' : `${moment(checkedInAt).format("MM-DD-YYYY hh:mm:ss")} at timezone ${timezone.split('/').reverse().join(', ')}`}</td>
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
                <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                {/if}
            </tr>
        </tfoot>
    </table>
    <Pagination count={total} pageSize={limit} page={pagination}>
        <Pagination.PrevTrigger><ArrowLeftIcon class="size-4"/></Pagination.PrevTrigger>
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
        <Pagination.NextTrigger><ArrowRightIcon class="size-4"/></Pagination.NextTrigger>
    </Pagination>
</div>