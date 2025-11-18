<script lang="ts">
    import { teamInsertSchema } from 'usad-scheme';
	import type z from 'zod';
    type Student = z.infer<typeof teamInsertSchema>['team']['students'][number];
    const { student = $bindable<Student>() } = $props<{student: Student}>();
</script>
<div class="flex flex-row space-x-1.5">
    <div class="input-group grid-cols=[auto_1fr_auto] flex flex-row w-5xl">
        <input class="input" type="text" placeholder="First name..." bind:value={student.firstName}/>
        <input class="input" type="text" placeholder="Last name..." bind:value={student.lastName}/>
    </div>
    <span class="vr border-1-4"></span>
    <label class="label flex flex-row">
        <input class="input" type="number" step="0.1" placeholder="GPA..." min={0} max={4.5} bind:value={student.gpa}/>
    </label>
</div>