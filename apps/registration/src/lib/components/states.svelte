<script lang="ts">
	import { states } from "$lib/enums/states";
	import {stateEnums} from "usad-scheme";
	import z from 'zod';

	var { state = $bindable(), placeholder, disabled } = $props<{
		state: z.infer<typeof stateEnums> | null | undefined;
		placeholder?: string | null | undefined;
		disabled?: boolean | null | undefined;
	}>();
</script>

<select disabled={disabled} required class="select" bind:value={state}>
	<option disabled selected value={null}>{placeholder}</option>
	{#each states as { shorthand, original }, i (i)}
		<option value={shorthand}>{original} ({shorthand})</option>
	{/each}
</select>
<!--<input class="input" type="text" placeholder="School state..." bind:value={school.state}/>-->
