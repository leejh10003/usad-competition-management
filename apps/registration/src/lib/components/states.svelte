<script lang="ts">
	import { states } from "$lib/enums/states";
	import {storage, selectState} from '$lib/utils/store.svelte';
	import {stateEnums} from "usad-scheme";
	import z from 'zod';

	var { placeholder, disabled } = $props<{
		placeholder?: string | null | undefined;
		disabled?: boolean | null | undefined;
	}>();
</script>

<select disabled={disabled} required class="select" value={storage.state} onchange={(v) => selectState(v.currentTarget.value as z.infer<typeof stateEnums>)}>
	<option disabled selected value={null}>{placeholder}</option>
	{#each states as { shorthand, original }, i (i)}
		<option value={shorthand}>{original} ({shorthand})</option>
	{/each}
</select>
<!--<input class="input" type="text" placeholder="School state..." bind:value={school.state}/>-->
