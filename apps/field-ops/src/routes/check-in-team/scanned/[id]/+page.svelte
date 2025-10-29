<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import SignaturePad from '../../../../components/signature.svelte';
	import { Block, BlockTitle, Button } from 'konsta/svelte';
	import _ from 'lodash';
    import BottomPadding from '../../../../components/bottom-padding.svelte';
	let path = $derived(page.url.pathname);
	let pathElements = $derived(path.split('/').filter((e) => e.trim().length > 0));
	let id = $derived(pathElements[pathElements.length - 1]);
	var pads: SignaturePad[] = $state(new Array(0));
	onMount(async () => {
		pads = new Array(10);
	});
</script>
<style>
    .signature-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        justify-items: center;
    }
</style>
<div class="flex flex-col">
	<BlockTitle>Code of conduct</BlockTitle>
	<Block>
		<p>
			Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
			vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
		</p>
	</Block>
    <BlockTitle>Signatures</BlockTitle>
	<Block>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
			{#each pads as _, i}
				<div class="signature-group">
                    <h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad width={300} height={150} signatureId={id} bind:this={pads[i]} />
					<Button class="w-min" rounded onclick={() => pads[i]?.clear()}>Clear</Button>
				</div>
			{/each}
		</div>
	</Block>
    <BottomPadding />
</div>
