<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import { Tabbar, TabbarLink, ToolbarPane, App, Navbar } from 'konsta/svelte';
	import NavbarRightButton from './NavbarRightButton.svelte';
	import { resolve } from '$app/paths';
	let { children } = $props();
	const Tabs = {
		Registration: 'registration',
		CheckinTeam: 'check-in-team',
		EventCheckIn: 'event-check-in'
	};
	let activeTab = $state(Tabs.CheckinTeam);
	let convertTitle = (input: string) => {
		var format = input.replaceAll('-', ' ');
		return `${format.charAt(0).toUpperCase()}${format.slice(1)}`;
	};
	var subtitle = '';
	let title = $derived(convertTitle(activeTab));
	var size: 'medium' | 'large' | 'default' = $state('medium');
	let goTab = (input: string) => {
		activeTab = input;
		goto(resolve(`/${input}` as Parameters<typeof resolve>[0]));
	};
	var isTransparent = true;
	let isTabbarLabels = $state(true);
	let isTabbarIcons = $state(true);
</script>

<App safeAreas theme="ios" class="flex flex-col">
	<Navbar
		{title}
		{subtitle}
		class="top-0 sticky"
		medium={size === 'medium'}
		large={size === 'large'}
		transparent={isTransparent}
	>
		{#snippet right()}
			<NavbarRightButton />
		{/snippet}
	</Navbar>
	<div class="flex h-full grow">
		{@render children?.()}
	</div>
	<Tabbar labels={isTabbarLabels} icons={isTabbarIcons} class="fixed bottom-0 left-0">
		{/* @ts-expect-error: Ignore KonstUI's incomplete Typescript support */ null}
		<ToolbarPane>
			{#each [Tabs.CheckinTeam, Tabs.EventCheckIn] as e, i (i)}
				<TabbarLink active={activeTab === e} onclick={() => goTab(e)}>
					{#snippet label()}
						{isTabbarLabels ? convertTitle(e) : undefined}
					{/snippet}
				</TabbarLink>
			{/each}
		</ToolbarPane>
	</Tabbar>
</App>
