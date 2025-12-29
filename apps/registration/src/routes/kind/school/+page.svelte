<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import _ from 'lodash';
	import { schoolInsertSchema, division } from 'usad-scheme';
	import type z from 'zod';
	import StudentInput from '$lib/components/student.svelte';
	import CoachInput from '$lib/components/coach.svelte';
	import { Listbox, useListCollection } from '@skeletonlabs/skeleton-svelte';
	//eslint-disable-next-line @typescript-eslint/no-unused-vars
	import Enumerable from 'linq';
	import StateDropdown from '$lib/components/states.svelte';
	import { validateZipCode, onScoreChange, disableNonNumeric } from '$lib/utils/validation';
	import { storage } from '$lib/utils/store.svelte';
	import { imask } from '@imask/svelte';
	type SchoolType = Omit<z.infer<typeof schoolInsertSchema>['school'], 'isVirtual' | 'emailDomain'>;
	type Division = z.infer<typeof division>;
	var school = $state<SchoolType>({
		name: '',
		state: storage.state,
		streetAddress: '',
		city: '',
		zipCode: '',
		phone: '',
		principalEmail: '',
		principalName: '',
		teams: [generateTeam(0)],
		coachTeamMappings: [],
		coaches: [],
		primaryCoachIndex: -1,
		competitionId: '',
		mutationIndex: 0,
	});
	var teamCoachMapping: { [teamId: number]: string[] } = $state({ 0: [] });
	const collection = $derived.by(() => {
		return useListCollection({
			items: school.coaches.map((item, index) => ({
				label: `${index + 1}: ${item.firstName} ${item.lastName}`,
				value: index.toString()
			})),
			itemToValue: ({ value }) => value,
			itemToString: ({ label }) => label
		});
	});
	function generateStudents(division: Division, index: number) {
		return {
			lastName: '',
			firstName: '',
			gpa: undefined,
			division,
			mutationIndex: index
		};
	}
	function generateTeam(index: number) {
		return {
			students: [
				..._.times(3, (i) => generateStudents('H', i)),
				..._.times(3, (i) => generateStudents('S', i + 3)),
				..._.times(3, (i) => generateStudents('V', i + 6))
			],
			subjectiveStore: undefined,
			objectiveScore: undefined,
			mutationIndex: index
		};
	}
	function removeTeam(index: number) {
		school.teams.splice(index, 1);
		teamCoachMapping = _.fromPairs(
			_.entries(teamCoachMapping)
				.filter(([teamId]) => teamId !== index.toString())
				.map(([teamId, coaches]) => {
					const parsedTeamId = parseInt(teamId);
					const adjustedTeamId = parsedTeamId - (parsedTeamId < index ? 0 : 1);
					return [adjustedTeamId, coaches];
				})
		);
	}
	function removeCoach(index: number) {
		school.coaches.splice(index, 1);
		_.entries(teamCoachMapping).forEach(([i, coaches]) => {
			teamCoachMapping[parseInt(i)] = coaches
				.filter((i) => parseInt(i) !== index)
				.map((key) => {
					const i = parseInt(key);
					return (i - (i < index ? 0 : 1)).toString();
				});
		});
	}
	function addCoach() {
		school.coaches.push({
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			mutationIndex: school.coaches.length
		});
	}
	function addTeam() {
		teamCoachMapping[school.coaches.length] = [];
		school.teams.push(generateTeam(0));
	}
	function onSubmit() {
		//console.log($state.snapshot(school));
		console.log($state.snapshot(school.state));
	}
</script>

<div class="w-full h-full">
	<form class="space-y-8 p-4 flex flex-col">
		<h1 class="h1 text-center">Team</h1>
		<div class="grid space-y-2">
			<label class="label grid">
				<span class="label-text">School Name</span>
				<input class="input" type="text" placeholder="School Name..." bind:value={school.name} />
			</label>
			<label class="label grid">
				<span class="label-text">School Street Address</span>
				<input
					class="input"
					type="text"
					placeholder="School Street Address..."
					bind:value={school.streetAddress}
				/>
			</label>
			<label class="label grid">
				<span class="label-text">School City</span>
				<input class="input" type="text" placeholder="School City..." bind:value={school.city} />
			</label>
			<label class="label grid">
				<span class="label-text">School State</span>
				<StateDropdown disabled />
				<!--<input class="input" type="text" placeholder="School state..." bind:value={school.state}/>-->
			</label>
			<label class="label grid">
				<span class="label-text">School Zip Code</span>
				<input
					class="input"
					type="text"
					maxlength="5"
					pattern="[0-9]*"
					onkeypress={(e) => validateZipCode(e as unknown as KeyboardEvent)}
					placeholder="Zip Code..."
					bind:value={school.zipCode}
				/>
			</label>
			<label class="label grid">
				<span class="label-text"
					>School Phone Number (Numbers only, do not use ‘-’, format ##########)</span
				>
				<input
					class="input"
					type="text"
					placeholder="Phone Number..."
					pattern="[0-9]*"
					bind:value={school.phone}
				/>
			</label>
			<label class="label grid">
				<span class="label-text">School Principal Name</span>
				<input
					class="input"
					type="text"
					placeholder="Principal Name..."
					bind:value={school.principalName}
				/>
			</label>
			<label class="label grid">
				<span class="label-text">School Principal Email</span>
				<input
					class="input"
					type="text"
					placeholder="Principal Email..."
					bind:value={school.principalEmail}
				/>
			</label>
		</div>
		<h2 class="h2">Coaches</h2>
		{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
		{#each school.coaches as _, i (i)}
			<CoachInput
				bind:coach={school.coaches[i]}
				index={i}
				removable={school.coaches.length > 1}
				remove={removeCoach}
				bind:primaryCoachIndex={school.primaryCoachIndex}
			/>
		{/each}
		<div class="flex-row">
			<button type="button" class="btn preset-filled-primary-500" onclick={() => addCoach()}
				>Add coach...</button
			>
		</div>
		<h2 class="h2">Teams</h2>
		{#each school.teams as team, i (i)}
			{@const honors = team.students.filter(({ division }) => division === 'H')}
			{@const scholastic = team.students.filter(({ division }) => division === 'S')}
			{@const varsity = team.students.filter(({ division }) => division === 'V')}
			<div class="space-y-2">
				<div class="flex-row flex">
					<h3 class="h3">Team {i + 1}</h3>
					{#if school.teams.length > 1}&nbsp;&nbsp;<button
							type="button"
							class="btn preset-outlined-primary-500 btn-sm"
							onclick={() => removeTeam(i)}>Remove team</button
						>{/if}
				</div>
				<h4 class="h4">Team coaches</h4>
				<Listbox
					{collection}
					value={teamCoachMapping[i]}
					onValueChange={(v) => (teamCoachMapping[i] = v.value)}
					selectionMode="multiple"
				>
					<Listbox.Content>
						{#each collection.items as item, j (j)}
							<Listbox.Item {item}>
								<Listbox.ItemText>{item.label}</Listbox.ItemText>
								<Listbox.ItemIndicator />
							</Listbox.Item>
						{/each}
					</Listbox.Content>
				</Listbox>
				<div class="flex flex-row space-x-1.5 items-center">
					<input
						class="input flex-3"
						use:imask={{
							mask: Number,
							thousandsSeparator: ',',
							scale: 2,
							radix: '.',
							padFractionalZeros: true,
							normalizeZeros: true,
							lazy: false,
						}}
						onaccept={({detail: maskRef}) => {
							team.objectiveScore = parseFloat(maskRef.value.replaceAll(',', ''));
						}}
						value={team.objectiveScore}
						placeholder="Objective Score..."
					/>
					<input
						class="input flex-3"
						use:imask={{
							mask: Number,
							thousandsSeparator: ',',
							scale: 2,
							radix: '.',
							padFractionalZeros: true,
							normalizeZeros: true,
							lazy: false,
						}}
						onaccept={({detail: maskRef}) => {
							team.subjectiveScore = parseFloat(maskRef.value.replaceAll(',', ''));
						}}
						value={team.subjectiveScore}
						placeholder="Subjective Score..."
					/>
					<div class="flex-1 text-end">
						Total score: {((team.objectiveScore ?? 0) + (team.subjectiveScore ?? 0)).toLocaleString()}
					</div>
				</div>
				<h4 class="h4">Honors</h4>
				{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
				{#each honors as _, j (j)}
					<StudentInput bind:student={honors[j]} />
				{/each}
				<h4 class="h4">Scholastic</h4>
				{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
				{#each scholastic as _, j (j)}
					<StudentInput bind:student={scholastic[j]} />
				{/each}
				<h4 class="h4">Varsity</h4>
				{/*eslint-disable-next-line @typescript-eslint/no-unused-vars*/ null}
				{#each varsity as _, j (j)}
					<StudentInput bind:student={varsity[j]} />
				{/each}
			</div>
		{/each}
		<div class="flex-row">
			<button type="button" class="btn preset-filled-primary-500" onclick={() => addTeam()}
				>Add team...</button
			>
		</div>
		<div class="btn-group flex-col p-2 md:flex-row">
			<button
				type="button"
				class="btn preset-outlined-surface-300-700"
				onclick={() => goto(resolve('/kind'))}>Back</button
			>
			<button type="button" class="btn preset-filled-primary-500" onclick={() => onSubmit()}
				>Submit</button
			>
		</div>
	</form>
</div>
