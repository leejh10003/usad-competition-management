<script lang="ts">
    var { inputValue = $bindable(), propName } = $props();
</script>
<label class="label">
    <span class="label-text">{propName}</span>
    <input type="text" class="input w-full" bind:value={inputValue} />
</label>