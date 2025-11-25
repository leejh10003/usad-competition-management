<script lang="ts">
	import { teamInsertSchema } from 'usad-scheme';
	import type z from 'zod';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import _ from 'lodash';
	import { disableNonNumeric, onGpaChange } from '$lib/utils/validation';
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	import { FileIcon } from '@lucide/svelte';
	type Student = z.infer<typeof teamInsertSchema>['team']['students'][number];
	const { student = $bindable<Student>() } = $props<{ student: Student }>();
</script>

<div class="flex flex-row space-x-1.5 items-center">
	<input
		class="input flex-5"
		type="text"
		placeholder="First name..."
		bind:value={student.firstName}
	/>
	<input
		class="input flex-5"
		type="text"
		placeholder="Last name..."
		bind:value={student.lastName}
	/>
	<input
		class="input flex-2"
		onkeypress={disableNonNumeric}
		onchange={(e) => onGpaChange(e as unknown as InputEvent, { gpa: student.gpa })}
		type="number"
		inputmode="numeric"
		pattern="[0-9.]*"
		step="0.1"
		placeholder="GPA..."
		min="0"
		max="4.5"
		bind:value={student.gpa}
	/>
	<FileUpload class="w-fit h-min" onFileAccept={console.log}>
		<FileUpload.Trigger class="btn-sm btn-icon"><FileIcon /></FileUpload.Trigger>
		<FileUpload.HiddenInput />
	</FileUpload>
</div>
