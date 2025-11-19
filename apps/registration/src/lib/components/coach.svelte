<script lang="ts">
    import { schoolInsertSchema } from 'usad-scheme';
	import type z from 'zod';
    type Coach = z.infer<typeof schoolInsertSchema>['school']['coaches'][number];
    let { coach = $bindable<Coach>(), removable, remove, primaryCoachIndex = $bindable(), index } = $props<{coach: Coach, removable: boolean, remove: (index: number) => void, primaryCoachIndex: number, index: number}>();
</script>
<div class="flex flex-row space-x-1.5">
    Coach {index}&nbsp;&nbsp;
    <input class="input flex-3" type="text" placeholder="First name..." bind:value={coach.firstName}/>
    <input class="input flex-3" type="text" placeholder="Last name..." bind:value={coach.lastName}/>
    <input class="input flex-3" type="text" placeholder="Phone..." bind:value={coach.phone}/>
    <input class="input flex-3" type="text" placeholder="Email..." bind:value={coach.email}/>
    <input class="radio" type="radio" bind:group={primaryCoachIndex} value={index} />
    {#if removable}&nbsp;&nbsp;<button type="button" class="btn preset-outlined-primary-500 btn-sm" onclick={() => remove(index)}>Remove coach</button>{/if}
</div>