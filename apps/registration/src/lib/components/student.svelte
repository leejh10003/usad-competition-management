<script lang="ts">
    import { teamInsertSchema } from 'usad-scheme';
	import type z from 'zod';
    type Student = z.infer<typeof teamInsertSchema>['team']['students'][number];
    const { student = $bindable<Student>() } = $props<{student: Student}>();
</script>
<div class="flex flex-row space-x-1.5">
    <input class="input flex-5" type="text" placeholder="First name..." bind:value={student.firstName}/>
    <input class="input flex-5" type="text" placeholder="Last name..." bind:value={student.lastName}/>
    <input class="input flex-2" type="number" step="0.1" placeholder="GPA..." min={0} max={4.5} bind:value={student.gpa}/>
</div>