<script lang="ts">
    import { schoolInsertSchema } from 'usad-scheme';
	import type z from 'zod';
    type Coach = z.infer<typeof schoolInsertSchema>['school']['coaches'][number];
    let { coach = $bindable<Coach>(), removable, remove, primaryCoachIndex = $bindable(), index } = $props<{coach: Coach, removable: boolean, remove: (index: number) => void, primaryCoachIndex: number, index: number}>();
</script>
<div class="flex flex-row space-x-1.5 align-middle">
    Coach {index + 1}&nbsp;&nbsp;
    <input class="input flex-3" type="text" placeholder="First name..." bind:value={coach.firstName}/>
    <input class="input flex-3" type="text" placeholder="Last name..." bind:value={coach.lastName}/>
    <input class="input flex-3" type="text" placeholder="Phone..." pattern="[0-9]*" bind:value={coach.phone}/>
    <input class="input flex-3" type="text" placeholder="Email..." bind:value={coach.email}/>
    <label class="label align-middle self-center flex-2 flex flex-row items-end justify-end">
        <span class="label-text self-center">Head coach</span>
        &nbsp; &nbsp;
        <input class="radio" type="radio" bind:group={primaryCoachIndex} value={index} />
    </label>
    {#if removable}&nbsp;&nbsp;<button type="button" class="btn preset-outlined-primary-500 btn-sm" onclick={() => remove(index)}>Remove coach</button>{/if}
</div>