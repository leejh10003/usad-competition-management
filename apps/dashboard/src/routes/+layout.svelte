<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import favicon from '$lib/assets/favicon.svg';
	import {
		CalendarIcon,
		CircleUserIcon,
		SearchIcon,
		SchoolIcon,
		UserCheckIcon,
		IdCardLanyardIcon,
		UsersIcon,
		UserIcon,
		AwardIcon
	} from '@lucide/svelte';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';

	let { children } = $props();
	let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';
	let menuStructure: {
		groupName: string;
		items: { icon: typeof SchoolIcon; title: string; path: string }[];
	}[] = [
		{
			groupName: 'Events',
			items: [
				{ icon: AwardIcon, title: 'Competition', path: 'competition' },
				{ icon: CalendarIcon, title: 'Event', path: 'event' },
				{ icon: UserCheckIcon, title: 'Check in', path: 'event-check-in' },
			]
		},
		{
			groupName: 'Participants',
			items: [
				{ icon: SchoolIcon, title: 'School', path: 'school' },
				{ icon: IdCardLanyardIcon, title: 'Coach', path: 'coach' },
				{ icon: UsersIcon, title: 'Team', path: 'team' },
				{ icon: UserIcon, title: 'Student', path: 'student' }
			]
		},
	];
</script>

<div class="flex h-full flex-col">
	<AppBar>
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead></AppBar.Lead>
			<AppBar.Headline>
				<p class="text-2xl">USAD Final Management System</p>
			</AppBar.Headline>
			<AppBar.Trail>
				<button type="button" class="btn-icon hover:preset-tonal"
					><SearchIcon class="size-6" /></button
				>
				<button type="button" class="btn-icon hover:preset-tonal"
					><CalendarIcon class="size-6" /></button
				>
				<button type="button" class="btn-icon hover:preset-tonal"
					><CircleUserIcon class="size-6" /></button
				>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
	<div class="flex h-full flex-row">
		<Navigation layout="sidebar" class="grid grid-rows-[auto_1fr_auto] gap-4">
			<Navigation.Content>
				{#each menuStructure as menuGroups (menuGroups.groupName)}
					<Navigation.Group>
						<Navigation.Label>{menuGroups.groupName}</Navigation.Label>
						{#each menuGroups.items as item (item.path)}
							<Navigation.Menu>
								{@const Icon = item.icon}
								<a
									href={resolve(`/${item.path}` as string as Parameters<typeof resolve>[0])}
									title={item.title}
									aria-label={item.title}
									class={`${anchorSidebar} ${page.url.pathname.replace(/^\//g, '').startsWith(`${item.path}/`) ? 'preset-filled-primary-500' : ''}`}
								>
									<Icon />
									<span>{item.title}</span>
								</a>
							</Navigation.Menu>
						{/each}
					</Navigation.Group>
				{/each}
			</Navigation.Content>
		</Navigation>
		<div class="w-full h-full overflow-scroll">
			{@render children()}
		</div>
	</div>
</div>
