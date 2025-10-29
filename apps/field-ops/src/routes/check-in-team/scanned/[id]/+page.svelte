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
	var signatures: {
		coach?: SignaturePad;
		honors: (SignaturePad | undefined)[];
		scholastic: (SignaturePad | undefined)[];
		varsity: (SignaturePad | undefined)[];
	} = $state({
		coach: undefined,
		honors: [],
		scholastic: [],
		varsity: []
	});
	onMount(async () => {
		signatures = {
			coach: undefined,
			honors: _.range(3).map(() => undefined),
			scholastic: _.range(3).map(() => undefined),
			varsity: _.range(3).map(() => undefined)
		};
	});
</script>

<div class="flex flex-col">
	<BlockTitle large>Code of conduct</BlockTitle>
	<Block>
		<p>
			Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
			vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
		</p>
	</Block>
	<BlockTitle large>Signatures</BlockTitle>
	<BlockTitle medium>Coach</BlockTitle>
	<Block>
		<div class="signature-group flex flex-col">
			<h1 class="text-center font-medium">Coach</h1>
			<SignaturePad width={300} height={150} signatureId={id} bind:this={signatures.coach} />
			<Button class="w-min" rounded onclick={() => signatures.coach?.clear()}>Clear</Button>
		</div>
	</Block>
	<BlockTitle medium>Honors</BlockTitle>
	<Block>
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each signatures.honors as _, i}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id}
						bind:this={signatures.honors[i]}
					/>
					<Button class="w-min" rounded onclick={() => signatures.honors[i]?.clear()}>Clear</Button>
				</div>
			{/each}
		</div>
	</Block>
	<BlockTitle medium>Scholastic</BlockTitle>
	<Block>
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each signatures.scholastic as _, i}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id}
						bind:this={signatures.scholastic[i]}
					/>
					<Button class="w-min" rounded onclick={() => signatures.scholastic[i]?.clear()}
						>Clear</Button
					>
				</div>
			{/each}
		</div>
	</Block>
	<BlockTitle medium>Varsity</BlockTitle>
	<Block>
		<div
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each signatures.varsity as _, i}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id}
						bind:this={signatures.varsity[i]}
					/>
					<Button class="w-min" rounded onclick={() => signatures.varsity[i]?.clear()}>Clear</Button
					>
				</div>
			{/each}
		</div>
	</Block>
	<BottomPadding />
</div>

<style>
	.signature-group {
		display: flex;
		flex-direction: column;
		width: fit-content;
		gap: 1rem;
		justify-items: center;
		align-items: center;
	}
</style>
