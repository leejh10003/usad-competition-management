<script lang="ts">
	import { page } from '$app/state';
    import { Button } from 'konsta/svelte';
    import { eventCheckInButtonPressed } from './store';
    let path = $derived(page.url.pathname);
	let pathElements = $derived(path.split('/').filter((e) => e.trim().length > 0));
    type AppState = 'scanned' | 'checkin-team' | 'event-check-in';
</script>
{#if pathElements.includes('scanned')}
    <div class="flex flex-row">
        <Button clear>
            Submit
        </Button>
        <Button clear class="k-color-brand-red" onclick={() => {
            eventCheckInButtonPressed.set(true);
        }}>
            Clear
        </Button>
    </div>
{/if}