<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { division, stateEnums } from 'usad-scheme';
	import type z from 'zod';
	import { imask } from '@imask/svelte';
	import _ from 'lodash';
	import StateDropdown from '$lib/components/states.svelte';
	import {
		validateZipCode,
		onGpaChange,
		disableNonNumeric,
		onScoreChange
	} from '$lib/utils/validation';
	import { FileIcon } from '@lucide/svelte';
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	import { workerRequest } from '$lib/api';
	import type { FileUploadState } from '$lib/enums/file';
	import { storage } from '$lib/utils/store.svelte';

	const maskOptions = {
		mask: Number,
		thousandsSeperator: ','
	};
	var streetAddress = $state<string>();
	var city = $state<string>();
	var zipCode = $state<string>();
	var gpa = $state<number>();
	var group = $state<z.infer<typeof division>>();
	var firstName = $state<string>();
	var lastName = $state<string>();
	var guardianFirstName = $state<string>();
	var guardianLastName = $state<string>();
	var guardianPhone = $state<string>();
	var guardianEmail = $state<string>();
	var fileKey = $state<string>();
	var fileState = $state<FileUploadState>('none');
	var objectiveScore = $state<number>();
	var subjectiveScore = $state<number>();
	var totalScore = $derived(((objectiveScore ?? 0) + (subjectiveScore ?? 0)).toLocaleString());
	var streetAddressInvalid = $state(false);
	var cityInvalid = $state(false);
	var stateInputInvalid = $state(false);
	var zipCodeInvalid = $state(false);
	var gpaInvalid = $state(false);
	var groupInvalid = $state(false);
	var firstNameInvalid = $state(false);
	var lastNameInvalid = $state(false);
	var guardianFirstNameInvalid = $state(false);
	var guardianLastNameInvalid = $state(false);
	var guardianPhoneInvalid = $state(false);
	var guardianEmailInvalid = $state(false);
	var objectiveScoreInvalid = $state(false);
	var subjectiveScoreInvalid = $state(false);
	function onSubmit() {
		streetAddressInvalid = (streetAddress?.trim()?.length ?? 0) < 1;
		cityInvalid = (city?.trim()?.length ?? 0) < 1;
		stateInputInvalid = (storage.state?.trim()?.length ?? 0) < 1;
		zipCodeInvalid =
			(zipCode?.trim()?.length ?? 0) !== 5 || (zipCode?.match(/^\d/g)?.length ?? 0) < 1;
		gpaInvalid = (gpa ?? 0) < 0 || (gpa ?? 0) > 4.5;
		groupInvalid = !group;
		firstNameInvalid = (firstName?.trim()?.length ?? 0) < 1;
		lastNameInvalid = (lastName?.trim()?.length ?? 0) < 1;
		guardianFirstNameInvalid = (guardianFirstName?.trim()?.length ?? 0) < 1;
		guardianLastNameInvalid = (guardianLastName?.trim()?.length ?? 0) < 1;
		guardianPhoneInvalid = (guardianPhone?.trim()?.length ?? 0) < 1;
		guardianEmailInvalid = (guardianEmail?.trim()?.length ?? 0) < 1;
		objectiveScoreInvalid = _.isNil(objectiveScore) && objectiveScore !== 0;
		subjectiveScoreInvalid = _.isNil(subjectiveScore) && subjectiveScore !== 0;
		//TODO: if all valid, submit and go back to main view
	}
</script>

<div class="w-full h-full justify-center items-center content-center">
	<form class="space-y-4 p-4 max-w-md m-auto">
		<h1 class="h1 text-center">Individual</h1>
		<fieldset class="space-y-4">
			<!-- Input -->

			<label class="label">
				<span class="label-text"
					>First Name<span class={`text-red-500 ${firstNameInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;First name is invalid</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					placeholder="First name..."
					bind:value={firstName}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Last Name<span class={`text-red-500 ${lastNameInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check the zipcode format</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					placeholder="Last name..."
					bind:value={lastName}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Street address<span class={`text-red-500 ${streetAddressInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check the street address</span
					></span
				>
				<input
					required
					class="input"
					type="text"
					placeholder="Street address..."
					bind:value={streetAddress}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>City<span class={`text-red-500 ${cityInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check if the city is correct</span
					></span
				>
				<input required class="input" type="text" placeholder="City..." bind:value={city} />
			</label>
			<label class="label">
				<span class="label-text"
					>State<span class={`text-red-500 ${stateInputInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check the state is valid or not</span
					></span
				>
				<StateDropdown disabled />
			</label>
			<label class="label">
				<span class="label-text"
					>Zip code<span class={`text-red-500 ${zipCodeInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check the zipcode format</span
					></span
				>
				<input
					required
					maxlength="5"
					class="input"
					onkeypress={(e) => validateZipCode(e as unknown as KeyboardEvent)}
					placeholder="Zip code..."
					bind:value={zipCode}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>GPA<span class={`text-red-500 ${gpaInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;GPA not in between 0 and 4.5</span
					></span
				>
				<input
					required
					class="input"
					onkeypress={disableNonNumeric}
					onchange={(e) => onGpaChange(e as unknown as InputEvent, { gpa })}
					type="number"
					step="0.1"
					placeholder="GPA..."
					min={0}
					max={4.5}
					bind:value={gpa}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>GPA Division<span class={`text-red-500 ${groupInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Select group</span
					></span
				>
				<select required class="select" bind:value={group}>
					<option disabled selected value> -- Select an option -- </option>
					<option value="H">Honors (3.80 - 4.00)</option>
					<option value="S">Scholastic (3.20 - 3.799)</option>
					<option value="V">Varsity (0.00 - 3.199)</option>
				</select>
			</label>
			<label class="label">
				<span class="label-text"
					>Objective Score<span
						class={`text-red-500 ${objectiveScoreInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Fill the objective score</span
					></span
				>
				<input
					required
					class="input"
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
						objectiveScore = parseFloat(maskRef.value.replaceAll(',', ''));
					}}
					value={objectiveScore}
					placeholder="Objective Score..."
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Subjective Score<span
						class={`text-red-500 ${subjectiveScoreInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Fill the subjective score</span
					></span
				>
				<input
					required
					class="input"
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
						subjectiveScore = parseFloat(maskRef.value.replaceAll(',', ''));
					}}
					value={subjectiveScore}
					placeholder="Subjective Score..."
				/>
			</label>
			<label class="label">
				<span class="label-text">Total Score</span>
				<input
					disabled
					class="input"
					placeholder="Total Score..."
					bind:value={totalScore}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Parent/Guardian First Name<span
						class={`text-red-500 ${guardianFirstNameInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check Parent/Guardian First</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					placeholder="Parent/Guardian First Name..."
					bind:value={guardianFirstName}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Parent/Guardian Last Name<span
						class={`text-red-500 ${guardianLastNameInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check Parent/Guardian Last</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					placeholder="Parent/Guardian Last Name..."
					bind:value={guardianLastName}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Parent/Guardian Phone<span
						class={`text-red-500 ${guardianPhoneInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check Parent/Guardian Phone</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					pattern="[0-9]*"
					placeholder="Parent/Guardian Phone..."
					bind:value={guardianPhone}
				/>
			</label>
			<label class="label">
				<span class="label-text"
					>Guardian/Pareent Email<span
						class={`text-red-500 ${guardianEmailInvalid ? 'visible' : 'hidden'}`}
						>&nbsp;&nbsp;Check Guardian/Pareent Email</span
					></span
				>
				<input
					required
					class="input flex-5"
					type="text"
					placeholder="Guardian/Pareent Email..."
					bind:value={guardianEmail}
				/>
			</label>
		</fieldset>
		<fieldset class="flex justify-end">
			<FileUpload
				maxFiles={1}
				accept={['application/pdf']}
				onFileAccept={async (details) => {
					var currentState: FileUploadState = 'none';
					try {
						currentState = fileState;
						fileState = 'uploading';
						const response = await workerRequest.uploadFile({
							index: 0,
							kind: 'registering-additional',
							file: details.files[0],
							fileKey: details.files[0].name
						});
						console.log(response);
						fileKey = response.fileKey;
						console.log($state.snapshot(fileKey));
						fileState = 'uploaded';
					} catch (e) {
						console.error(e);
						fileState = currentState;
					}
				}}
			>
				<FileUpload.Label>File Upload</FileUpload.Label>
				<FileUpload.Dropzone>
					<FileIcon class="size-10" />
					<span>Select file or drag here.</span>
					<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
					<FileUpload.HiddenInput />
				</FileUpload.Dropzone>
				<FileUpload.ItemGroup>
					<FileUpload.Context>
						{#snippet children(fileUpload)}
							{#each fileUpload().acceptedFiles as file (file.name)}
								<FileUpload.Item {file}>
									<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
									<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
									<FileUpload.ItemDeleteTrigger />
								</FileUpload.Item>
							{/each}
						{/snippet}
					</FileUpload.Context>
				</FileUpload.ItemGroup>
			</FileUpload>
		</fieldset>
		<fieldset class="flex justify-end">
			<!-- Button -->
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
		</fieldset>
	</form>
</div>
