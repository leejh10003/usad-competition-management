<script lang="ts">
	import { splitStringForQueryHighlight } from "$lib/utils/string";

    const { splitted } = $props<{splitted: ReturnType<typeof splitStringForQueryHighlight>}>();
</script>
<div class="flex flex-row">
{#each splitted as { originalQuery, originalString }, i (i)}
    <span class="whitespace-pre">{originalString}</span>
    <span class="bg-blue-500 whitespace-pre">{originalQuery}</span>
{/each}
</div>