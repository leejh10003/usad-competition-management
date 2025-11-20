<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { Pagination } from '@skeletonlabs/skeleton-svelte';
    import _ from 'lodash';
    import { schoolQuerySchema, schoolResponse } from 'usad-scheme';
    import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
    import z from 'zod'
    type SchoolResponseItem = z.infer<typeof schoolResponse>['school'];
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var limit = $state<number>(10);
    var pagination = $state<number>(0);
    var offset = $derived.by(() => pagination * limit);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    var schools = $state<SchoolResponseItem[]>([]);
    async function fetch(searchParams: z.infer<typeof schoolQuerySchema>) {
        isLoading = true;
        //TODO: server fetch
        schools = _.range(0, 10).map((_) => ({
            isVirtual: false,
            name: "Midwest US Science High School",
            streetAddress: "7601, Wildwood Court B3",
            city: "Lorton",
            state: "VA",
            zipCode: "22079",
            id: "",
            principalEmail: "leejh10003@gmail.com",
            phone: "(361)343-6656",
            principalName: "Arthur Dominguez"
        }));
        isLoading = false;
    }
    $effect(() => {
        let searchParams = schoolQuerySchema.safeParse(Object.fromEntries(page.url.searchParams.entries()));
        console.log('prerender')
        if (searchParams.success){
            fetch(searchParams.data);
        } else {
            console.log('not using');
        }
    })
    function changeFilter(){
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('test', 'true');
        goto(`?${searchParams.toString()}`);
    }
</script>
<div class="flex flex-col h-full w-full p-8 gap-y-3.5">
    <h1 class="h1 font-bold">School</h1>
    <button onclick={() => goto('?asdf=asdf')}>tt</button>
    <table class="table">
        <thead>
            <tr>
                <td>School Name</td>
                <td>School Address</td>
                <td>School Phone #</td>
                <td>School Principal</td>
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
                {#each schools as school}
                {@const {name, principalEmail, principalName, phone, streetAddress, city, state, zipCode } = school}
                <tr>
                    <td>{name}</td>
                    <td>{streetAddress}, {city}, {state} ({zipCode})</td>
                    <td>{phone}</td>
                    <td>{principalName} (email: <a href={`mailto:${principalEmail}`}>{principalEmail}</a>)</td>
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