<script lang="ts" generics="T">
    import { range } from 'lodash';
	import { type Snippet } from 'svelte';
    import { get } from 'lodash'
    const {
        isLoading = $bindable<boolean>(),
        getLimit = $bindable<number>(),
        data = $bindable<Array<T>>(),
        columns = $bindable<Array<{
            header: string;
            accessor?: Parameters<typeof get<T>>[1];
            cell?: (row: T) => any;
            snippet?: Snippet<[T]>;
        }>>(),
        isFirstLoaded = $bindable<boolean>(false),
        offset = $bindable<number>(0),
        currentCount = $bindable<number>(0),
        total = $bindable<number>(0),
    } = $props<{
        isLoading: boolean,
        getLimit: number,
        data: Array<T>,
        columns: Array<{
            header: string;
            accessor?: Parameters<typeof get<T>>[1];
            cell?: (row: T) => any;
            snippet?: Snippet<[T]>;
        }>,
        isFirstLoaded: boolean,
        offset: number,
        currentCount: number,
        total: number,
    }>();
</script>
<table class="table">
    <thead>
        <tr>
            {#each columns as column (column.header)}
                <td>{column.header}</td>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#if isLoading}
            {#each range(0, getLimit, 1) as n (n)}
                <tr>
                    {#each columns as column (column.header)}
                        <td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
                    {/each}
                </tr>
            {/each}
        {:else}
            {#each data as item (item.id)}
                <tr>
                    {#each columns as column (column.header)}
                        <td>
                            {#if column.snippet}
                                {@render column.snippet(item)}
                            {:else if column.cell}
                                {column.cell(item)}
                            {:else if !column.cell && column.accessor}
                                {get(item, column.accessor, '')}
                            {:else}
                                <!--{column.cell ? (column.cell(item)) : item[column.accessor]}-->
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        {/if}
    </tbody>
    <tfoot>
        <tr>
            <td colspan={columns.length - 1}>Total</td>
            {#if isFirstLoaded}
                <td colspan="1">{offset + 1} - {offset + currentCount}/{total} Elements</td>
            {:else}
                <td><div class="placeholder w-full animate-pulse">&nbsp;</div></td>
            {/if}
        </tr>
    </tfoot>
</table>