<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import _ from 'lodash';
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var offset = $state<number>(0);
    var limit = $state<number>(10);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    let searchParams = $derived(page.url.search);
    $effect(() => {
        console.log('searchParam changed', searchParams);
    })
    function changeFilter(){
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('test', 'true');
        goto(`?${searchParams.toString()}`);
    }
</script>
<div class="flex flex-col h-full w-full p-8 gap-y-3.5">
    <h1 class="h1 font-bold">School</h1>
    <button onclick={() => changeFilter()}>Test param</button>
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
                <tr>
                    <td>Midwest US Science High School</td>
                    <td>7601, Wildwood Court B3, Lorton, VA</td>
                    <td>(361)343-6656</td>
                    <td>Arthur Dominguez(email: leejh10003@gmail.com)</td>
                </tr>
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
</div>