<script lang="ts">
	import { imask } from '@imask/svelte';
    var { inputValue = $bindable(), propName } = $props<{inputValue: number | null | undefined; propName: string}>();
</script>
<label class="label">
    <span class="label-text">{propName}</span>
    <input
        required
        class="input"
        use:imask={{
            mask: Number,
            thousandsSeparator: ',',
            scale: 2,
            radix: '.',
            padFractionalZeros: true,
            normalizeZeros: true,
            lazy: false,
        }}
        onaccept={({detail: maskRef}) => {
            inputValue = parseFloat(maskRef.value.replaceAll(',', ''));
        }}
        value={inputValue}
    />
</label>