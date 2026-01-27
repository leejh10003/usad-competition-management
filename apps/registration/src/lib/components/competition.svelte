<script lang="ts">
	import {storage, selectCompetition, cached} from '$lib/utils/store.svelte';
	import z from 'zod';
	const {disabled}: {disabled?: boolean | undefined} = $props();
</script>

<select disabled={disabled} required class={`select ${!storage.state ? 'invisible' : ''}`} value={storage.competition} onchange={(v) => selectCompetition(v.currentTarget.value as unknown as z.ZodUUID)}>
    <option disabled selected value={null}>Select Competition...</option>
    {#each cached.competitions as { id, name }, i (i)}
		<option value={id}>{name}</option>
	{/each}
</select>