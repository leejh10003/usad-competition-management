import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Snippet } from "svelte";
export var eventCheckInButtonPressed: Writable<boolean> = writable(false);