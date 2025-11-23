<script lang="ts">
	import { goto } from '$app/navigation';
    import _ from 'lodash';
    import {
        schoolInsertSchema,
        division,

		eventResponseItemSchema

    } from 'usad-scheme';
	import type z from 'zod';
    import StudentInput from '$lib/components/student.svelte';
    import CoachInput from '$lib/components/coach.svelte';
    import {Listbox, useListCollection} from '@skeletonlabs/skeleton-svelte';
    import Enumerable from 'linq';
    import StateDropdown from '$lib/components/states.svelte';
    type SchoolType = Omit<z.infer<typeof schoolInsertSchema>['school'], 'isVirtual' | 'emailDomain'>;
    type Division = z.infer<typeof division>;
    var school = $state<SchoolType>({
        name: "",
        state: null,
        streetAddress: "",
        city: "",
        zipCode: "",
        phone: "",
        principalEmail: "",
        principalName: "",
        teams: [generateTeam()],
        coachTeamMappings: [],
        coaches: [],
        primaryCoachIndex: -1,
    });
    var teamCoachMapping: {[teamId: number]: string[]} = $state({0: []});
    const collection = $derived.by(() => {
        return useListCollection({
            items: school.coaches.map((item, index) => ({label: `${index + 1}: ${item.firstName} ${item.lastName}`, value: index.toString()})),
            itemToValue: ({value}) => value,
            itemToString: ({label}) => label
        });
    });
    function generateStudents(division: Division) {
        return {
            lastName: "",
            firstName: "",
            gpa: undefined,
            division
        };
    }
    function generateTeam() {
        return {
            students: [..._.times(3, () => generateStudents("H")), ..._.times(3, () => generateStudents("S")), ..._.times(3, () => generateStudents("V"))],
        };
    }
    function removeTeam(index: number) {
        school.teams.splice(index, 1);
        teamCoachMapping = _.fromPairs(_.entries(teamCoachMapping).filter(([teamId]) => teamId !== index.toString()).map(([teamId, coaches]) => {
            const parsedTeamId = parseInt(teamId);
            const adjustedTeamId = parsedTeamId - (parsedTeamId < index ? 0 : 1);
            return [adjustedTeamId, coaches];
        }));
    }
    function removeCoach(index: number) {
        school.coaches.splice(index, 1);
        _.entries(teamCoachMapping).forEach(([i, coaches]) => {
            teamCoachMapping[parseInt(i)] = coaches.filter(i => parseInt(i) !== index).map(key => {
                const i = parseInt(key);
                return (i - (i < index ? 0 : 1)).toString();
            })
        })
    }
    function addCoach() {
        school.coaches.push({
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        });
    }
    function addTeam() {
        teamCoachMapping[school.coaches.length] = [];
        school.teams.push(generateTeam());
    }
    function onSubmit() {
        //console.log($state.snapshot(school));
        console.log($state.snapshot(school.state));
    }
</script>
<div class="w-full h-full">
    <form class="space-y-8 p-4 flex flex-col">
        <div class="grid space-y-2">
            <label class="label grid">
                <span class="label-text">School name</span>
                <input class="input" type="text" placeholder="School name..." bind:value={school.name}/>
            </label>
            <label class="label grid">
                <span class="label-text">School street address</span>
                <input class="input" type="text" placeholder="School street address..." bind:value={school.streetAddress}/>
            </label>
            <label class="label grid">
                <span class="label-text">School city</span>
                <input class="input" type="text" placeholder="School city..." bind:value={school.city}/>
            </label>
            <label class="label grid">
                <span class="label-text">School State</span>
                <StateDropdown placeholder="School State..." bind:state={school.state}/>
                <!--<input class="input" type="text" placeholder="School state..." bind:value={school.state}/>-->
            </label>
            <label class="label grid">
                <span class="label-text">School zip code</span>
                <input class="input" type="text" maxlength="5" pattern="[0-9]*" placeholder="Zip code..." bind:value={school.zipCode}/>
            </label>
            <label class="label grid">
                <span class="label-text">School phone number (Numbers only, do not use ‘-’, format ##########)</span>
                <input class="input" type="text" placeholder="Phone number..." pattern="[0-9]*" bind:value={school.phone}/>
            </label>
            <label class="label grid">
                <span class="label-text">School principal name</span>
                <input class="input" type="text" placeholder="Principal name..." bind:value={school.principalName}/>
            </label>
            <label class="label grid">
                <span class="label-text">School principal email</span>
                <input class="input" type="text" placeholder="Principal email..." bind:value={school.principalEmail}/>
            </label>
        </div>
        <h2 class="h2">Coaches</h2>
        {#each school.coaches as _, i}
            <CoachInput bind:coach={school.coaches[i]} index={i} removable={school.coaches.length > 1} remove={removeCoach} bind:primaryCoachIndex={school.primaryCoachIndex}/>
        {/each}
        <div class="flex-row">
            <button type="button" class="btn preset-filled-primary-500" onclick={() => addCoach()}>Add coach...</button>
        </div>
        <h2 class="h2">Teams</h2>
        {#each school.teams as team, i}
            <!--TODO: Add coach inline-->
            {@const honors = team.students.filter(({division}) => division === 'H')}
            {@const scholastic = team.students.filter(({division}) => division === 'S')}
            {@const varsity = team.students.filter(({division}) => division === 'V')}
            <div class="space-y-2">
                <div class="flex-row flex"><h3 class="h3">Team {i + 1}</h3>{#if school.teams.length > 1}&nbsp;&nbsp;<button type="button" class="btn preset-outlined-primary-500 btn-sm" onclick={() => removeTeam(i)}>Remove team</button>{/if}</div>
                <h4 class="h4">Team coaches</h4>
                <Listbox {collection} value={teamCoachMapping[i]} onValueChange={(v) => teamCoachMapping[i] = v.value} selectionMode="multiple">
                    <Listbox.Content>
                        {#each collection.items as item}
                            <Listbox.Item {item}>
                                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                                <Listbox.ItemIndicator />
                            </Listbox.Item>
                        {/each}
                    </Listbox.Content>
                </Listbox>
                <h4 class="h4">Honors</h4>
                {#each honors as _, j}
                    <StudentInput bind:student={honors[j]}/>
                {/each}
                <h4 class="h4">Scholastic</h4>
                {#each scholastic as _, j}
                    <StudentInput bind:student={scholastic[j]}/>
                {/each}
                <h4 class="h4">Varsity</h4>
                {#each varsity as _, j}
                    <StudentInput bind:student={varsity[j]}/>
                {/each}
            </div>
        {/each}
        <div class="flex-row">
            <button type="button" class="btn preset-filled-primary-500" onclick={() => addTeam()}>Add team...</button>
        </div>
        <div class="btn-group flex-col p-2 md:flex-row">
            <button type="button" class="btn preset-outlined-surface-300-700" onclick={() => goto('/')}>Back</button>
            <button type="button" class="btn preset-filled-primary-500" onclick={() => onSubmit()}>Submit</button>
        </div>
    </form>
</div>