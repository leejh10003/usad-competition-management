<script lang="ts">
	import { goto } from "$app/navigation";
    import StudentRow from "$lib/components/student.svelte";
    import { division } from 'usad-scheme';
	import type z from "zod";
    import _ from 'lodash';
    import StateDropdown from "$lib/components/states.svelte"
    import {validateZipCode, onGpaChange, disableNonNumeric} from "$lib/utils/validation";
    var streetAddress = $state<string>();
    var city = $state<string>();
    var stateInput = $state<string>();
    var zipCode = $state<string>();
    var gpa = $state<number>();
    var group = $state<z.infer<typeof division>>();
    var firstName = $state<string>();
    var lastName = $state<string>();
    var guardianFirstName = $state<string>();
    var guardianLastName = $state<string>();
    var guardianPhone = $state<string>();
    var guardianEmail = $state<string>();
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
    function onSubmit(){
        streetAddressInvalid = (streetAddress?.trim()?.length ?? 0) < 1;
        cityInvalid = (city?.trim()?.length ?? 0) < 1;
        stateInputInvalid = (stateInput?.trim()?.length ?? 0) < 1;
        zipCodeInvalid = (zipCode?.trim()?.length ?? 0) !== 5 || (zipCode?.match(/^\d/g)?.length ?? 0) < 1;
        gpaInvalid = (gpa ?? 0) < 0 || (gpa ?? 0) > 4.5;
        groupInvalid = !group;
        firstNameInvalid = (firstName?.trim()?.length ?? 0) < 1;
        lastNameInvalid = (lastName?.trim()?.length ?? 0) < 1;
        guardianFirstNameInvalid = (guardianFirstName?.trim()?.length ?? 0) < 1;
        guardianLastNameInvalid = (guardianLastName?.trim()?.length ?? 0) < 1;
        guardianPhoneInvalid = (guardianPhone?.trim()?.length ?? 0) < 1;
        guardianEmailInvalid = (guardianEmail?.trim()?.length ?? 0) < 1;
        //TODO: if all valid, submit and go back to main view
    }
    
</script>
<div class="w-full h-full justify-center items-center content-center">
    <form class="space-y-4 p-4 max-w-md m-auto">
        <fieldset class="space-y-4">
            <!-- Input -->
            <label class="label">
                <span class="label-text">Street address<span class={`text-red-500 ${streetAddressInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the street address</span></span>
                <input required class="input" type="text" placeholder="Street address..." bind:value={streetAddress}/>
            </label>
            <label class="label">
                <span class="label-text">City<span class={`text-red-500 ${cityInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check if the city is correct</span></span>
                <input required class="input" type="text" placeholder="City..." bind:value={city}/>
            </label>
            <label class="label">
                <span class="label-text">State<span class={`text-red-500 ${stateInputInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the state is valid or not</span></span>
                <StateDropdown placeholder="State..." bind:state={stateInput}/>
            </label>
            <label class="label">
                <span class="label-text">Zip code<span class={`text-red-500 ${zipCodeInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the zipcode format</span></span>
                <input required maxlength="5" class="input" onkeypress={(e) => validateZipCode(e as unknown as KeyboardEvent)} placeholder="Zip code..." bind:value={zipCode}/>
            </label>

            <label class="label">
                <span class="label-text">First Name<span class={`text-red-500 ${firstNameInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;First name is invalid</span></span>
                <input required class="input flex-5" type="text" placeholder="First name..." bind:value={firstName}/>
            </label>
            <label class="label">
                <span class="label-text">Last Name<span class={`text-red-500 ${lastNameInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the zipcode format</span></span>
                <input required class="input flex-5" type="text" placeholder="Last name..." bind:value={lastName}/>
            </label>
            <label class="label">
                <span class="label-text">GPA<span class={`text-red-500 ${gpaInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;GPA not in between 0 and 4.5</span></span>
                <input required class="input" onkeypress={disableNonNumeric} onchange={(e) => onGpaChange(e as unknown as InputEvent, {gpa})} type="number" step="0.1" placeholder="GPA..." min={0} max={4.5} bind:value={gpa}/>
            </label>
            <label class="label">
                <span class="label-text">GPA Division<span class={`text-red-500 ${groupInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Select group</span></span>
                <select required class="select" bind:value={group}>
                    <option disabled selected value> -- Select an option -- </option>
                    <option value="H">Honors</option>
                    <option value="S">Scholastic</option>
                    <option value="V">Varsity</option>
                </select>
            </label>
            <label class="label">
                <span class="label-text">Guardian/Parent First Name<span class={`text-red-500 ${guardianFirstNameInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check Guardian/Parent First</span></span>
                <input required class="input flex-5" type="text" placeholder="Guardian/Parent First Name..." bind:value={guardianFirstName}/>
            </label>
            <label class="label">
                <span class="label-text">Guardian/Parent Last Name<span class={`text-red-500 ${guardianLastNameInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check Guardian/Parent Last</span></span>
                <input required class="input flex-5" type="text" placeholder="Guardian/Parent Last Name..." bind:value={guardianLastName}/>
            </label>
            <label class="label">
                <span class="label-text">Guardian/Parent Phone<span class={`text-red-500 ${guardianPhoneInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check Guardian/Parent Phone</span></span>
                <input required class="input flex-5" type="text" pattern="[0-9]*" placeholder="Guardian/Parent Phone..." bind:value={guardianPhone}/>
            </label>
            <label class="label">
                <span class="label-text">Guardian/Pareent Email<span class={`text-red-500 ${guardianEmailInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check Guardian/Pareent Email</span></span>
                <input required class="input flex-5" type="text" placeholder="Guardian/Pareent Email..." bind:value={guardianEmail}/>
            </label>
        </fieldset>
        <fieldset class="flex justify-end">
            <!-- Button -->
            <div class="btn-group flex-col p-2 md:flex-row">
                <button type="button" class="btn preset-outlined-surface-300-700" onclick={() => goto('/')}>Back</button>
                <button type="button" class="btn preset-filled-primary-500" onclick={() => onSubmit()}>Submit</button>
            </div>
        </fieldset>
    </form>
</div>