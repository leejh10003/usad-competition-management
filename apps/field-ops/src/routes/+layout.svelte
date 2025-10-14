<script lang="ts">
	import { goto } from '$app/navigation';
	import '../app.css';
	import { App } from 'konsta/svelte';
	import { Tabbar, TabbarLink, ToolbarPane } from 'konsta/svelte';
	let { children } = $props();
    const Tabs = {
        Registration: "registration",
        TeamCheckIn: "team-check-in",
        EventCheckIn: "event-check-in"
    }
	let activeTab = $state(Tabs.Registration);
	let goTab = (input: string) => {
		activeTab = input;
		goto(input);
	};
	let isTabbarLabels = $state(true);
	let isTabbarIcons = $state(true);
</script>

<App theme="ios">
	{@render children?.()}
	<Tabbar labels={isTabbarLabels} icons={isTabbarIcons} class="fixed bottom-0 left-0">
		<ToolbarPane>
			{#if isTabbarIcons}
				<TabbarLink
					active={activeTab === Tabs.Registration}
					onclick={() => (goTab(Tabs.Registration))}
					label={isTabbarLabels ? 'Registration' : undefined}
				></TabbarLink>
				<TabbarLink
					active={activeTab === Tabs.TeamCheckIn}
					onclick={() => goTab(Tabs.TeamCheckIn)}
					label={isTabbarLabels ? 'Checkin Team' : undefined}
				></TabbarLink>
				<TabbarLink
					active={activeTab === Tabs.EventCheckIn}
					onclick={() => goTab(Tabs.EventCheckIn)}
					label={isTabbarLabels ? 'Event Checkin' : undefined}
				></TabbarLink>
			{:else}
				<TabbarLink
					active={activeTab === Tabs.Registration}
					onclick={() => (goTab(Tabs.Registration))}
					label={isTabbarLabels ? 'Registration' : undefined}
				></TabbarLink>
				<TabbarLink
					active={activeTab === Tabs.TeamCheckIn}
					onclick={() => goTab(Tabs.TeamCheckIn)}
					label={isTabbarLabels ? 'Checkin Team' : undefined}
				></TabbarLink>
				<TabbarLink
					active={activeTab === Tabs.EventCheckIn}
					onclick={() => goTab(Tabs.EventCheckIn)}
					label={isTabbarLabels ? 'Event Checkin' : undefined}
				></TabbarLink>
			{/if}
		</ToolbarPane>
	</Tabbar>
</App>
