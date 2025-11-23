<script lang="ts">
	import { goto } from "$app/navigation";
    import StudentRow from "$lib/components/student.svelte";
    import { division } from 'usad-scheme';
	import type z from "zod";
    import _ from 'lodash';
    import StateDropdown from "$lib/components/states.svelte"
    var streetAddress = $state<string>();
    var city = $state<string>();
    var stateInput = $state<string>();
    var zipCode = $state<string>();
    var gpa = $state<number>();
    var group = $state<z.infer<typeof division>>();
    var streetAddressInvalid = $state(false);
    var cityInvalid = $state(false);
    var stateInputInvalid = $state(false);
    var zipCodeInvalid = $state(false);
    var gpaInvalid = $state(false);
    var groupInvalid = $state(false);
    function onSubmit(){
        streetAddressInvalid = (streetAddress?.trim()?.length ?? 0) < 1;
        cityInvalid = (city?.trim()?.length ?? 0) < 1;
        stateInputInvalid = (stateInput?.trim()?.length ?? 0) < 1;
        zipCodeInvalid = (zipCode?.trim()?.length ?? 0) !== 5 || (zipCode?.match(/^\d/g)?.length ?? 0) < 1;
        gpaInvalid = (gpa ?? 0) < 0 || (gpa ?? 0) > 4.5;
        groupInvalid = !group;
        //TODO: if all valid, submit and go back to main view
    }
    
</script>
<div class="w-full h-full justify-center items-center content-center">
    <form class="space-y-4 p-4 max-w-md m-auto">
        <fieldset class="space-y-4">
            <!-- Input -->
            <label class="label">
                <span class="label-text">Street address<span class={`text-red-500 ${streetAddressInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the street address</span></span>
                <input class="input" type="text" placeholder="Street address..." bind:value={streetAddress}/>
            </label>
            <label class="label">
                <span class="label-text">City<span class={`text-red-500 ${cityInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check if the city is correct</span></span>
                <input class="input" type="text" placeholder="City..." bind:value={city}/>
            </label>
            <label class="label">
                <span class="label-text">State<span class={`text-red-500 ${stateInputInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the state is valid or not</span></span>
                <StateDropdown placeholder="State..." bind:state={stateInput}/>
            </label>
            <label class="label">
                <span class="label-text">Zip code<span class={`text-red-500 ${zipCodeInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Check the zipcode format</span></span>
                <input maxlength="5" class="input" pattern="[0-9]*" placeholder="Zip code..." bind:value={zipCode}/>
            </label>
            <label class="label">
                <span class="label-text">GPA<span class={`text-red-500 ${gpaInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;GPA not in between 0 and 4.5</span></span>
                <input class="input" onkeypress={(e) => {
                    if (e.code.startsWith('Key')){
                            e.preventDefault();
                        }
                    }} onchange={(e) => {
                        if (_.isNumber(gpa) && gpa as number > 4.5) {
                            e.preventDefault();
                            gpa = 4.5;
                        }
                        if (_.isNumber(gpa) && gpa as number < 0) {
                            e.preventDefault();
                            gpa = 0;
                        }
                        gpa = parseFloat((gpa as number).toPrecision(2));
                }} type="number" step="0.1" placeholder="GPA..." min={0} max={4.5} bind:value={gpa}/>
            </label>
            <label class="label">
                <span class="label-text">GPA Division<span class={`text-red-500 ${groupInvalid ? 'visible' : 'hidden'}`}>&nbsp;&nbsp;Select group</span></span>
                <select class="select" bind:value={group}>
                    <option disabled selected value> -- Select an option -- </option>
                    <option value="H">Honors</option>
                    <option value="S">Scholastic</option>
                    <option value="V">Varsity</option>
                </select>
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