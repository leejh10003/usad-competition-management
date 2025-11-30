<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="flex grow flex-col">
	<div class="m-auto flex flex-col items-center text-center">
		<h1 class="h1 font-semibold">Register a Team</h1>
		<br />
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind/school'))}>Team</button
		>
		<br />
		<h1 class="h1 font-semibold">Register as an Individual</h1>
		<br />
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind/individual'))}>Individual</button
		>
		<br />
		<h1 class="h1 font-semibold">Go back to choose state</h1>
		<br />
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/'))}>Back</button
		>
	</div>
</div>
