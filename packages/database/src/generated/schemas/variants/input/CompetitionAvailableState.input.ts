import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionAvailableStateInputSchema = z.object({
    competitionId: z.string(),
    state: StateSchema,
    competition: z.unknown()
}).strict();

export type CompetitionAvailableStateInputType = z.infer<typeof CompetitionAvailableStateInputSchema>;
