import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionAvailableStateModelSchema = z.object({
    competitionId: z.string(),
    state: StateSchema,
    competition: z.unknown()
}).strict();

export type CompetitionAvailableStatePureType = z.infer<typeof CompetitionAvailableStateModelSchema>;
