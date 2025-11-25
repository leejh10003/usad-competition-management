<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { Dialog, Portal, Pagination } from '@skeletonlabs/skeleton-svelte';
    import _ from 'lodash';
    import { division, studentQuerySchema, studentResponseSchema } from 'usad-scheme';
    import { ArrowLeftIcon, ArrowRightIcon, XIcon } from '@lucide/svelte';
    import z from 'zod'
    import Pdf from '$lib/components/pdf.svelte'
    type StudentResponseItem = z.infer<typeof studentResponseSchema>['student'];
    var isLoading = $state<boolean>(true);
    var isFirstLoaded = $state<boolean>(true);
    var limit = $state<number>(10);
    var pagination = $state<number>(0);
    var offset = $derived.by(() => pagination * limit);
    var total = $state<number>(0);
    var currentCount = $state<number>(0);
    var students = $state<StudentResponseItem[]>([]);
    const animation = 'transition transition-discrete opacity-0 translate-y-[100px] starting:data-[state=open]:opacity-0 starting:data-[state=open]:translate-y-[100px] data-[state=open]:opacity-100 data-[state=open]:translate-y-0';
    async function fetch(searchParams: z.infer<typeof studentQuerySchema>) {
        isLoading = true;
        //TODO: server fetch
        const entities = [{id: "H1"          , firstName: "Lucille", lastName: 	"Mock"},
        {id: "H2"	 	    , firstName: "Marissa", lastName: 	"Guo"},
        {id: "H3"	 	    , firstName: "Shelby", lastName:	"Aust"},
        {id: "S4"	 	    , firstName: "JT", lastName: 	"Hare"},
        {id: "S5"	 	    , firstName: "Reyhan", lastName:	"Ramrakhyani"},
        {id: "S6"	 	    , firstName: "Lia", lastName: 	"Ha"},
        {id: "V7"	 	    , firstName: "Nathan", lastName:	"Frost"},
        {id: "V8"	 	    , firstName: "Gavin", lastName:	"Fox"},
        {id: "V9"	 	    , firstName: "Yuliya", lastName:	"Gorbunova"},
        {id: "ALT1-H1"	 	, firstName: "Luke", lastName:	"O'Brien"},
        {id: "ALT1-H2"	 	, firstName: "Caleb", lastName:	"Olson"},
        {id: "ALT1-H3"	 	, firstName: "Kylie", lastName: 	"Weaver"},
        {id: "ALT1-S4"	 	, firstName: "Rowan", lastName:	"LeFevre"},
        {id: "ALT1-S5"	 	, firstName: "Austin", lastName: 	"Strong"},
        {id: "ALT1-S6"	 	, firstName: "Heidi", lastName:	"Curtis"},
        {id: "ALT1-V7"	 	, firstName: "Gabriel", lastName:	"Gois"},
        {id: "ALT1-V8"	 	, firstName: "Maddy", lastName:	"Inman"},
        {id: "ALT2-H1"	 	, firstName: "Aariyaka", lastName:	"Jain"},
        {id: "ALT2-H2"	 	, firstName: "Riley", lastName:	"Delorey"},
        {id: "ALT2-H3"	 	, firstName: "Ethan", lastName: 	"Chaing"},
        {id: "ALT2-S4"	 	, firstName: "Ocean", lastName: 	"Hauke"},
        {id: "ALT2-S5"	 	, firstName: "Conor", lastName:	"Long"},
        {id: "ALT3-H1"	 	, firstName: "Raya", lastName:	"Waldron"},
        {id: "ALT3-H2"	 	, firstName: "Dylan", lastName:	"Portugal"},
        {id: "ALT3-H3"	 	, firstName: "Gregory", lastName: 	"DeFauw"},
        {id: "ALT3-S4"	 	, firstName: "Tyler", lastName:	"Bettner"},
        {id: "ALT3-S5"	 	, firstName: "AJ", lastName:	"Morris"},
        {id: "ALT4-H1"	 	, firstName: "Ishaan", lastName:	"Deshpande"},
        {id: "ALT4-H2"	 	, firstName: "Charles", lastName:	"Watts"},
        {id: "ALT4-H3"	 	, firstName: "Frederick", lastName:	"Sh"},
        {id: "ALT5-H1"	 	, firstName: "Thomas", lastName: 	"Bender"},
        {id: "ALT5-H2"	 	, firstName: "Ryan", lastName: 	"Waldro"},]
        students = entities.map((e) => {
            const group = (e.id.startsWith("ALT") ? e.id.split("-")[1].charAt(0) : e.id.charAt(0)) as z.infer<typeof division>;
            const gpa = group === 'H' ? 3.8 : group === 'S' ? 3.2 : 2.5;
            return {
                id: e.id,
                externalStudentId: e.id,
                division: group,
                gpa: gpa,
                firstName: e.firstName,
                lastName: e.lastName,
                teamId: "",
                schoolId: "",
                streetAddress: "47 W 13th St",
                city: "New York",
                state: "NY",
                zipCode: "10011",
                guardianEmail: "",
                guardianFirstName: "",
                guardianLastName: "",
                guardianPhone: "",
                attachmentOnRegistering: null
            };
        });
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
                <td>Attachment</td>
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
                    <td>
                        <Dialog>
                            <Dialog.Trigger class="btn preset-filled">Trigger</Dialog.Trigger>
                            <Portal>
                                <Dialog.Backdrop class="fixed inset-0 z-50 bg-surface-50-950/50" />
                                <Dialog.Positioner class="fixed inset-0 z-50 flex justify-center items-center p-4">
                                    <Dialog.Content class="card bg-surface-100-900 p-4 space-y-4 shadow-xl {animation}">
                                        <header class="flex justify-between items-center">
                                            <Dialog.Title class="text-lg font-bold">Pdf Viewer</Dialog.Title>
                                            <Dialog.CloseTrigger class="btn-icon hover:preset-tonal">
                                                <XIcon class="size-4" />
                                            </Dialog.CloseTrigger>
                                        </header>
                                        <Dialog.Description>
                                            <Pdf data="https://api.printnode.com/static/test/pdf/a4_500_pages.pdf" />
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