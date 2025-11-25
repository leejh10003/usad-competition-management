<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import SignaturePad from '$lib/components/signature.svelte';
	import { Block, BlockTitle, Button, Dialog, DialogButton } from 'konsta/svelte';
	import _ from 'lodash';
	import BottomPadding from '$lib/components/bottom-padding.svelte';
	import { eventCheckInClearButtonPressed, eventCheckInSubmitButtonPressed } from '../../store';
	/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/
	import Icon from '@iconify/svelte';
	/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/
	import { goto } from '$app/navigation';
	let id: string | undefined = $state(undefined);
	var coach: SignaturePad | undefined = $state(undefined);
	var students: {
		honors: (SignaturePad | undefined)[];
		scholastic: (SignaturePad | undefined)[];
		varsity: (SignaturePad | undefined)[];
	} = $state({
		honors: [],
		scholastic: [],
		varsity: []
	});
	var showClearAllDialog = $state(false);
	var showSubmitDialog = $state(false);
	var showUnsubmittableReasonDialog = $state(false);
	let closeUnsubmittableReasonDialog = () => {
		showUnsubmittableReasonDialog = false;
	};
	let openUnsubmittableReasonDialog = () => {
		showUnsubmittableReasonDialog = true;
	};
	let closeSubmitDialog = () => {
		showSubmitDialog = false;
	};
	let openSubmitDialog = () => {
		console.log(submittable());
		showSubmitDialog = true;
	};
	let submit = () => {
		// TODO: Submit logic here
		closeSubmitDialog();
	};
	let clearAllSignatures = () => {
		coach?.clear();
		students.honors.forEach((sig) => sig?.clear());
		students.scholastic.forEach((sig) => sig?.clear());
		students.varsity.forEach((sig) => sig?.clear());
	};
	let closeClearAllDialog = () => {
		showClearAllDialog = false;
	};
	let clearAndCloseDialog = () => {
		clearAllSignatures();
		closeClearAllDialog();
	};
	let openClearAllDialog = () => {
		showClearAllDialog = true;
	};
	let submittable = () => {
		return (
			coach?.getEditted() &&
			students.honors.every((sig) => sig?.getEditted()) &&
			students.scholastic.every((sig) => sig?.getEditted()) &&
			students.varsity.every((sig) => sig?.getEditted())
		);
	};
	eventCheckInSubmitButtonPressed.subscribe((value) => {
		if (value) {
			eventCheckInSubmitButtonPressed.set(false);
			if (submittable()) {
				openSubmitDialog();
			} else {
				openUnsubmittableReasonDialog();
			}
		}
	});
	eventCheckInClearButtonPressed.subscribe((value) => {
		if (value) {
			eventCheckInClearButtonPressed.set(false);
			openClearAllDialog();
		}
	});
	onMount(async () => {
		id = page.url.searchParams.get('id') ?? '';
		students = {
			honors: _.range(3).map(() => undefined),
			scholastic: _.range(3).map(() => undefined),
			varsity: _.range(3).map(() => undefined)
		};
	});
</script>

<div class="flex w-full flex-col">
	<BlockTitle large>Code of conduct</BlockTitle>
	<Block>
		<p>
			Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
			vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
		</p>
	</Block>
	{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
	<Dialog opened={showClearAllDialog} onBackdropClick={closeClearAllDialog}>
		{#snippet title()}
			Clear all signatures
		{/snippet}
		Are you sure to clear all signatures? All students an coach signatures will be cleared.
		{#snippet buttons()}
			{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
			<DialogButton onClick={closeClearAllDialog}>No</DialogButton>
			{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
			<DialogButton class="k-color-brand-red" strong onClick={clearAndCloseDialog}>Yes</DialogButton
			>
		{/snippet}
	</Dialog>
	{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
	<Dialog opened={showUnsubmittableReasonDialog} onBackdropClick={closeUnsubmittableReasonDialog}>
		{#snippet title()}
			Incomplete signatures
		{/snippet}
		Please ensure all signatures are provided before submitting.
		{#snippet buttons()}
			{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
			<DialogButton strong onClick={closeUnsubmittableReasonDialog}>Ok</DialogButton>
		{/snippet}
	</Dialog>
	{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
	<Dialog opened={showSubmitDialog} onBackdropClick={closeSubmitDialog}>
		{#snippet title()}
			Sbumit signatures
		{/snippet}
		Are you sure to submit? This action is not reversable.
		{#snippet buttons()}
			{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
			<DialogButton onClick={closeSubmitDialog}>No</DialogButton>
			{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
			<DialogButton strong onClick={submit}>Yes</DialogButton>
		{/snippet}
	</Dialog>
	<BlockTitle large>Signatures</BlockTitle>
	<BlockTitle medium>Coach</BlockTitle>
	<Block>
		<div class="signature-group flex flex-col">
			<h1 class="text-center font-medium">Coach</h1>
			<SignaturePad width={300} height={150} signatureId={id ?? ''} bind:this={coach} />
			<Button class="w-min" rounded onclick={() => coach?.clear()}>Clear</Button>
		</div>
	</Block>
	<BlockTitle medium>Honors</BlockTitle>
	<Block>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
			{#each students.honors as _, i (i)}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id ?? ''}
						bind:this={students.honors[i]}
					/>
					<Button class="w-min" rounded onclick={() => students.honors[i]?.clear()}>Clear</Button>
				</div>
			{/each}
		</div>
	</Block>
	<BlockTitle medium>Scholastic</BlockTitle>
	<Block>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
			{#each students.scholastic as _, i (i)}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id ?? ''}
						bind:this={students.scholastic[i]}
					/>
					<Button class="w-min" rounded onclick={() => students.scholastic[i]?.clear()}
						>Clear</Button
					>
				</div>
			{/each}
		</div>
	</Block>
	<BlockTitle medium>Varsity</BlockTitle>
	<Block>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
			{#each students.varsity as _, i (i)}
				<div class="signature-group">
					<h1 class="text-center font-medium">Signature {i + 1}</h1>
					<SignaturePad
						width={300}
						height={150}
						signatureId={id ?? ''}
						bind:this={students.varsity[i]}
					/>
					<Button class="w-min" rounded onclick={() => students.varsity[i]?.clear()}>Clear</Button>
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
