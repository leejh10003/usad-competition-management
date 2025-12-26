import { z } from 'zod';
import { stateEnums } from 'usad-scheme';
let storage = $state<{state: z.infer<typeof stateEnums> | null}>({
    state: null,
});
function selectState(input: z.infer<typeof stateEnums>){
    storage.state = input;
}
export { storage, selectState };
