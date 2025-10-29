import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Snippet } from "svelte";
export var eventCheckInClearButtonPressed: Writable<boolean> = writable(false);
export var eventCheckInSubmitButtonPressed: Writable<boolean> = writable(false);