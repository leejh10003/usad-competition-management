import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
//eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Snippet } from 'svelte';
//eslint-disable-next-line prefer-const
export let eventCheckInClearButtonPressed: Writable<boolean> = writable(false);
//eslint-disable-next-line prefer-const
export let eventCheckInSubmitButtonPressed: Writable<boolean> = writable(false);
