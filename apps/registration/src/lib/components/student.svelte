<script lang="ts">
    import { teamInsertSchema } from 'usad-scheme';
	import type z from 'zod';
    import _ from 'lodash'
    type Student = z.infer<typeof teamInsertSchema>['team']['students'][number];
    const { student = $bindable<Student>() } = $props<{student: Student}>();
</script>
<div class="flex flex-row space-x-1.5">
    <input class="input flex-5" type="text" placeholder="First name..." bind:value={student.firstName}/>
    <input class="input flex-5" type="text" placeholder="Last name..." bind:value={student.lastName}/>
    <input class="input flex-2" onkeypress={(e) => {
        if (e.code.startsWith('Key')){
            e.preventDefault();
        }
    }} onchange={(e) => {
        if (_.isNumber(student.gpa) && student.gpa as number > 4.5) {
            e.preventDefault();
            student.gpa = 4.5;
        }
        if (_.isNumber(student.gpa) && student.gpa as number < 0) {
            e.preventDefault();
            student.gpa = 0;
        }
        student.gpa = parseFloat((student.gpa as number).toPrecision(2));
    }} type="number" inputmode="numeric" pattern="[0-9.]*" step="0.1" placeholder="GPA..." min="0" max="4.5" bind:value={student.gpa}/>
</div>