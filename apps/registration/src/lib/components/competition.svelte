<script lang="ts">
	import {storage, selectState, selectCompetition, cached} from '$lib/utils/store.svelte';
	import {stateEnums} from "usad-scheme";
	import z from 'zod';
</script>

<select disabled={!storage.state} required class={`select ${!storage.state ? 'invisible' : ''}`} value={storage.competition} onchange={(v) => selectCompetition(v.currentTarget.value as unknown as z.ZodUUID)}>
    <option disabled selected value={null}>Select Competition...</option>
    {#each cached.competitions as { id, name }, i (i)}
		<option value={id}>{name}</option>
	{/each}
</select>