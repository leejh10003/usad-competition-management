<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { Pagination } from '@skeletonlabs/skeleton-svelte';
    import _ from 'lodash';
    import { coachQuerySchema, coachResponseSchema } from 'usad-scheme';
    import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
    import z from 'zod'
    type CoachResponseItem = z.infer<typeof coachResponseSchema>['coach'];
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var limit = $state<number>(10);
    var pagination = $state<number>(0);
    var offset = $derived.by(() => pagination * limit);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    var coaches = $state<CoachResponseItem[]>([]);
    async function fetch(searchParams: z.infer<typeof coachQuerySchema>) {
        isLoading = true;
        //TODO: server fetch
        coaches = _.range(0, 10).map((_) => ({
            id: "",
            firstName: "Lorem",
            lastName: "Ipsum",
            email: "test@mail.com",
            phone: "(123)456-7890",
            schoolId: "",
        }));
        isLoading = false;
    }
    $effect(() => {
        let searchParams = coachQuerySchema.safeParse(Object.fromEntries(page.url.searchParams.entries()));
        if (searchParams.success){
            fetch(searchParams.data);
        } else {
            //TODO:
        }
    })
    function changeFilter(){
        const searchParams = page.url.searchParams;
        searchParams.set('test', 'true');
        goto(`?${searchParams.toString()}`);
    }
</script>
<div class="flex flex-col h-full w-full p-8 gap-y-3.5">
    <h1 class="h1 font-bold">Coach</h1>
    <table class="table">
        <thead>
            <tr>
                <td>Name</td>
                <td>Phone</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {#if isLoading}
            {#each _.range(0, limit, 1) as n}
                <tr>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                </tr>
            {/each}
            {:else}
                {#each coaches as coach}
                {@const { firstName, lastName, email, phone } = coach}
                <tr>
                    <td>{firstName} {lastName}</td>
                    <td><a href={`tel:${phone}`}>{phone}</a></td>
                    <td><a href={`mailto:${email}`}>{email}</a></td>
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