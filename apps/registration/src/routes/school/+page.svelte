<script lang="ts">
	import { goto } from '$app/navigation';
    import _ from 'lodash';
    import {
        schoolInsertSchema,
        division
    } from 'usad-scheme';
	import type z from 'zod';
    import StudentInput from '$lib/components/student.svelte';
    type SchoolType = Omit<z.infer<typeof schoolInsertSchema>['school'], 'isVirtual' | 'emailDomain'>;
    type Division = z.infer<typeof division>;
    var school = $state<SchoolType>({
        name: "",
        state: "",
        streetAddress: "",
        city: "",
        zipCode: "",
        phone: "",
        principalEmail: "",
        principalName: "",
        teams: [generateTeam()],
        coachTeamMappings: [],
        coaches: [],
        primaryCoachIndex: 0,
    });
    function generateStudents(division: Division) {
        return {
            lastName: "",
            firstName: "",
            gpa: 0,
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
        school.coachTeamMappings = school.coachTeamMappings.filter(({teamIndex}) => teamIndex !== index).map(({teamIndex, coachIndex}) => ({
            coachIndex,
            teamIndex: teamIndex < index ? teamIndex : teamIndex - 1
        }));
    }
    function removeCoach(index: number) {
        school.coaches.splice(index, 1);
        school.coachTeamMappings = school.coachTeamMappings.filter(({coachIndex}) => coachIndex !== index).map(({teamIndex, coachIndex}) => ({
            teamIndex,
            coachIndex: coachIndex < index ? coachIndex : coachIndex - 1
        }));
    }
    function addTeam() {
        school.teams.push(generateTeam());
    }
    function onSubmit() {
        console.log($state.snapshot(school));
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
                <input class="input" type="text" placeholder="School state..." bind:value={school.state}/>
            </label>
            <label class="label grid">
                <span class="label-text">School zip code</span>
                <input class="input" type="text" placeholder="Zip code..." bind:value={school.zipCode}/>
            </label>
            <label class="label grid">
                <span class="label-text">School phone number</span>
                <input class="input" type="text" placeholder="Phone number..." bind:value={school.phone}/>
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
        {#each school.teams as team, i}
            {@const honors = team.students.filter(({division}) => division === 'H')}
            {@const scholastic = team.students.filter(({division}) => division === 'S')}
            {@const varsity = team.students.filter(({division}) => division === 'V')}
            <div class="space-y-2">
                <div class="flex-row flex"><h4 class="h4">Team {i + 1}</h4>{#if school.teams.length > 1}&nbsp;&nbsp;<button type="button" class="btn preset-outlined-primary-500 btn-sm" onclick={() => removeTeam(i)}>Remove team</button>{/if}</div>
                <h5 class="h5">Honors</h5>
                {#each honors as _, j}
                    <StudentInput bind:student={honors[j]}/>
                {/each}
                <h5 class="h5">Scholastic</h5>
                {#each scholastic as _, j}
                    <StudentInput bind:student={scholastic[j]}/>
                {/each}
                <h5 class="h5">Varsity</h5>
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