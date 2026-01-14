<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
    import { Pagination } from '@skeletonlabs/skeleton-svelte';

    const {
        getLimit,
        total,
        getCurrentPage,
        setCurrentPage,
    } = $props<{
        getLimit: number,
        total: number,
        getCurrentPage: number,
        setCurrentPage: (page: number) => void,
    }>();
</script>
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