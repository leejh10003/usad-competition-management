<script lang="ts">
	import { states } from "usad-enums";
	import {storage, selectState} from '$lib/utils/store.svelte';
	import {stateEnums} from "usad-scheme";
	import z from 'zod';
	const {disabled = $bindable()} = $props<{
		disabled: boolean
	}>();
</script>

<select required class="select" disabled={disabled} value={storage.state} onchange={(v) => selectState(v.currentTarget.value as z.infer<typeof stateEnums>)}>
	<option disabled selected value={null}>Select State...</option>
	{#each states as { shorthand, original }, i (i)}
		<option value={shorthand}>{original} ({shorthand})</option>
	{/each}
</select>
