<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import z from 'zod';
    import StateDropdown from '$lib/components/states.svelte';
	import CompetitionDropdown from '$lib/components/competition.svelte';
    import { storage } from '$lib/utils/store.svelte';
</script>

<div class="flex grow flex-col">
	<div class="m-auto flex flex-col items-center text-center">
		<h1 class="h1 font-semibold">Select a State</h1>
		<br />
        <StateDropdown />
        <br />
		<h1 class={`h1 font-semibold ${!storage.state ? 'invisible' : ''}`} >Select a Competition</h1>
		<br />
		<CompetitionDropdown />
		<br />
		<button
            disabled={!storage.state || !storage.competition}
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind'))}>Next</button>
	</div>
</div>
