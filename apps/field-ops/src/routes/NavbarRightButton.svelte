<script lang="ts">
	import { page } from '$app/state';
    import { Button } from 'konsta/svelte';
    import { eventCheckInClearButtonPressed, eventCheckInSubmitButtonPressed } from './store';
    let path = $derived(page.url.pathname);
	let pathElements = $derived(path.split('/').filter((e) => e.trim().length > 0));
    type AppState = 'scanned' | 'checkin-team' | 'event-check-in';
</script>
{#if pathElements.includes('scanned')}
    <div class="flex flex-row">
        <Button clear onclick={() => {
            eventCheckInSubmitButtonPressed.set(true);
        }}>
            Submit
        </Button>
        <Button clear class="k-color-brand-red" onclick={() => {
            eventCheckInClearButtonPressed.set(true);
        }}>
            Clear
        </Button>
    </div>
{/if}