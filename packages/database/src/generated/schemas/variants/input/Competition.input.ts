import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    events: z.array(z.unknown()),
    state: StateSchema.optional().nullable(),
    schools: z.array(z.unknown()),
    students: z.array(z.unknown()),
    mutationIndex: z.number().int()
}).strict();

export type CompetitionInputType = z.infer<typeof CompetitionInputSchema>;
