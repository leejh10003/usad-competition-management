<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import { App } from 'konsta/svelte';
	import { Tabbar, TabbarLink, ToolbarPane } from 'konsta/svelte';
	let { children } = $props();
	const Tabs = {
		Registration: 'registration',
		TeamCheckIn: 'team-check-in',
		EventCheckIn: 'event-check-in'
	};
	let activeTab = $state(Tabs.TeamCheckIn);
	let goTab = (input: string) => {
		activeTab = input;
		goto(`/${input}`);
	};
	let isTabbarLabels = $state(true);
	let isTabbarIcons = $state(true);
</script>

<App theme="ios">
	{@render children?.()}
	<Tabbar labels={isTabbarLabels} icons={isTabbarIcons} class="fixed bottom-0 left-0">
		{/* @ts-ignore */ null}
		<ToolbarPane>
			<TabbarLink active={activeTab === Tabs.TeamCheckIn} onclick={() => goTab(Tabs.TeamCheckIn)}>
				{#snippet label()}
					{isTabbarLabels ? 'Checkin Team' : undefined}
				{/snippet}
			</TabbarLink>
			<TabbarLink active={activeTab === Tabs.EventCheckIn} onclick={() => goTab(Tabs.EventCheckIn)}>
				{#snippet label()}
					{isTabbarLabels ? 'Event Checkin' : undefined}
				{/snippet}
			</TabbarLink>
		</ToolbarPane>
	</Tabbar>
</App>
