<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { CalendarIcon, CircleUserIcon, SearchIcon, SchoolIcon, UserCheckIcon, IdCardLanyardIcon, UsersIcon, UserIcon } from '@lucide/svelte';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';

	let { children } = $props();
	let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';
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
		<Navigation.Group>
			<Navigation.Label>Participants</Navigation.Label>
			<Navigation.Menu class={anchorSidebar}>
				<SchoolIcon />
				<span>School</span>
			</Navigation.Menu>
			<Navigation.Menu class={anchorSidebar}>
				<IdCardLanyardIcon />
				<span>Coach</span>
			</Navigation.Menu>
			<Navigation.Menu class={anchorSidebar}>
				<UsersIcon />
				<span>Team</span>
			</Navigation.Menu>
			<Navigation.Menu class={anchorSidebar}>
				<UserIcon />
				<span>Student</span>
			</Navigation.Menu>
		</Navigation.Group>
		<Navigation.Group>
			<Navigation.Label>Events</Navigation.Label>
			<Navigation.Menu class={anchorSidebar}>
				<CalendarIcon />
				<span>Event</span>
			</Navigation.Menu>
			<Navigation.Menu class={anchorSidebar}>
				<UserCheckIcon />
				<span>Check in</span>
			</Navigation.Menu>
		</Navigation.Group>
	</Navigation.Content>
</Navigation>
{@render children()}
</div>
</div>