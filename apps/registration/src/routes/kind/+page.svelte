<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<div class="flex grow flex-col">
	<div class="flex-1"></div>
	<div class="flex flex-row">
	<div class="m-auto flex flex-col items-center text-center">
		<h1 class="h1 font-semibold">Register a Team</h1>
		<br />
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind/school'))}>Team</button
		>
	</div>
	<div class="m-auto flex flex-col items-center text-center">
		<h1 class="h1 font-semibold">Register as an Individual</h1>
		<br />
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/kind/individual'))}>Individual</button
		>
	</div>
	</div>
	<div class="h-24"></div>
	<div class="flex flex-col items-center text-center">
		<button
			type="button"
			class="btn preset-filled-primary-500 btn-lg"
			onclick={() => goto(resolve('/'))}>Back</button
		>
	</div>
	<div class="flex-1"></div>
</div>
