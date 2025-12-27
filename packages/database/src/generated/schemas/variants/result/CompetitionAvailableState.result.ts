import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionAvailableStateResultSchema = z.object({
    competitionId: z.string(),
    state: StateSchema,
    competition: z.unknown()
}).strict();

export type CompetitionAvailableStateResultType = z.infer<typeof CompetitionAvailableStateResultSchema>;
