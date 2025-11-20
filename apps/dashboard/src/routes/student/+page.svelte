<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { Pagination } from '@skeletonlabs/skeleton-svelte';
    import _ from 'lodash';
    import { division, studentQuerySchema, studentResponseSchema } from 'usad-scheme';
    import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/svelte';
    import z from 'zod'
    type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var limit = $state<number>(10);
    var pagination = $state<number>(0);
    var offset = $derived.by(() => pagination * limit);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    var students = $state<StudentResponseItem[]>([]);
    async function fetch(searchParams: z.infer<typeof studentQuerySchema>) {
        isLoading = true;
        //TODO: server fetch
        students = _.range(0, 10).map((_) => ({
            id: "",
            externalStudentId: "7601",
            division: "H",
            gpa: 2.4,
            firstName: "Lorem",
            lastName: "Ipsum",
            teamId: "",
            schoolId: "",
            streetAddress: "47 W 13th St",
            city: "New York",
            state: "NY",
            zipCode: "10011",
        }));
        isLoading = false;
    }
    $effect(() => {
        let searchParams = studentQuerySchema.safeParse(Object.fromEntries(page.url.searchParams.entries()));
        if (searchParams.success){
            fetch(searchParams.data);
        } else {
            //TODO
        }
    })
    function changeFilter(){
        const searchParams = page.url.searchParams;
        searchParams.set('test', 'true');
        goto(`?${searchParams.toString()}`);
    }
</script>
<div class="flex flex-col h-full w-full p-8 gap-y-3.5">
    <h1 class="h1 font-bold">Student</h1>
    <table class="table">
        <thead>
            <tr>
                <td>ID #</td>
                <td>Name</td>
                <td>Address</td>
                <td>GPA</td>
                <td>Group</td>
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
                    <td><div class="placeholder animate-pulse w-full">&nbsp;</div></td>
                </tr>
            {/each}
            {:else}
                {#each students as student}
                {@const {firstName, lastName, streetAddress, city, state, zipCode, gpa, division, externalStudentId } = student}
                <tr>
                    <td>{externalStudentId}</td>
                    <td>{firstName} {lastName}</td>
                    <td>{streetAddress}, {city}, {state} ({zipCode})</td>
                    <td>{gpa}</td>
                    <td>{division === 'H' ? 'Honors' : division === 'S' ? 'Scholastic' : division === 'V' ? 'Varsity': 'Not assigned'}</td>
                </tr>
                {/each}
            {/if}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total</td>
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