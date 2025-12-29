import { z } from 'zod';
import { stateEnums } from 'usad-scheme';
let storage = $state<{state: z.infer<typeof stateEnums> | null, competition: z.ZodUUID | null}>({
    state: null,
    competition: null,
});
let cached = $state<{competitions: {id: z.ZodUUID, name: string}[]}>({
    competitions: [{
        id: "aea66d9b-cc3e-42e2-87c6-2f527bf789de" as unknown as z.ZodUUID,
        name: "Regional Science Competition"
    }],
})
function selectState(input: z.infer<typeof stateEnums>){
    storage.state = input;
}
function selectCompetition(input: z.ZodUUID){
    storage.competition = input;
}
function cacheCompetitions(input: {id: z.ZodUUID, name: string}[]){
    cached.competitions = input;
}
export { storage, selectState, selectCompetition, cached, cacheCompetitions };
