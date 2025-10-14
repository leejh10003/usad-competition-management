<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { App } from 'konsta/svelte';
	let { children } = $props();
</script>

<App theme="ios">
	{@render children?.()}
</App>
