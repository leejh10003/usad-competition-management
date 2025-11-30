import { z } from 'zod';
import { stateEnums } from 'usad-scheme';
class StorageStore {
    get state(): z.infer<typeof stateEnums> | null {
        return sessionStorage.getItem('state') as z.infer<typeof stateEnums> | null;
    }
    set state(value: z.infer<typeof stateEnums> | null) {
        if (value) {
            sessionStorage.setItem('state', value);
        } else {
            sessionStorage.removeItem('state');
        }
    }
}
export const storage = new StorageStore();
export type { StorageStore };
