<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import z, { ZodUUID } from 'zod';
    import StateDropdown from '$lib/components/states.svelte';
	import CompetitionDropdown from '$lib/components/competition.svelte';
    import { storage, cacheCompetitions, cached } from '$lib/utils/store.svelte';
	import { stateEnums } from 'usad-scheme';
	import { workerRequest } from '$lib/api';
	var disabled: boolean = $state<boolean>(false);
	var currentState: z.infer<typeof stateEnums> | null = null;
	$effect(() => {
		if (storage.state !== currentState) {
			currentState = storage.state;
			disabled = true;
			workerRequest.competition.get({ where: {competitionAvailableStates: { some: { state: currentState!} }}}).then((data) => {
				const fetchedCompetitions = data.competitions.map(({ id, name }) => ({ id: id as unknown as ZodUUID, name }));
				cacheCompetitions(fetchedCompetitions);
				disabled = false;
			}).catch(() => {
				disabled = false;
			});
		}
	})
</script>

<div class="flex grow flex-col">
	<div class="m-auto flex flex-col items-center text-center">
		<h1 class="h1 font-semibold">Select a State</h1>
		<br />
        <StateDropdown />
        <br />
		<h1 class={`h1 font-semibold ${!storage.state ? 'invisible' : ''}`} >Select a Competition</h1>
		<br />
		<CompetitionDropdown disabled={!storage.state || disabled} />
		<br />
		<button
            disabled={!storage.state || !storage.competition}
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind'))}>Next</button>
	</div>
</div>
