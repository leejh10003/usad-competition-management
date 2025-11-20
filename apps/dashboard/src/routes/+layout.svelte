<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { CalendarIcon, CircleUserIcon, SearchIcon, SchoolIcon, UserCheckIcon, IdCardLanyardIcon, UsersIcon, UserIcon } from '@lucide/svelte';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';
	let menuStructure: {groupName: string, items: {icon: typeof SchoolIcon, title: string, path: string}[]}[] = [{
		groupName: "Participants",
		items: [
			{icon: SchoolIcon, title: "School", path: "school"},
			{icon: IdCardLanyardIcon, title: "Coach", path: "coach"},
			{icon: UsersIcon, title: "Team", path: "team"},
			{icon: UserIcon, title: "Student", path: "student"},
		]
	}, {
		groupName: "Events",
		items: [
			{icon: CalendarIcon, title: "Event", path: "event"},
			{icon: UserCheckIcon, title: "Check in", path: "event-check-in"},
		]
	}];
</script>

<div class="flex flex-col h-full">
	<AppBar>
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead>
			</AppBar.Lead>
			<AppBar.Headline>
				<p class="text-2xl">USAD Final Management System</p>
			</AppBar.Headline>
			<AppBar.Trail>
				<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
				<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
				<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
	<div class="flex flex-row h-full">
		<Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
			<Navigation.Content>
				{#each menuStructure as menuGroups}
					<Navigation.Group>
						<Navigation.Label>{menuGroups.groupName}</Navigation.Label>
						{#each menuGroups.items as item}
							<Navigation.Menu>
								{@const Icon = item.icon}
								<a href={`/${item.path}`} title={item.title} aria-label={item.title} class={`${anchorSidebar} ${page.url.pathname.replace(/^\//g, '').startsWith(`${item.path}/`) ? 'preset-filled-primary-500' : ''}`}>
									<Icon />
									<span>{item.title}</span>
								</a>
							</Navigation.Menu>
						{/each}
					</Navigation.Group>
				{/each}
			</Navigation.Content>
		</Navigation>
		{@render children()}
	</div>
</div>