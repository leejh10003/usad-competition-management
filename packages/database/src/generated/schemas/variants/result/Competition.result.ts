import * as z from 'zod';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    events: z.array(z.unknown()),
    state: StateSchema.nullable(),
    schools: z.array(z.unknown()),
    students: z.array(z.unknown())
}).strict();

export type CompetitionResultType = z.infer<typeof CompetitionResultSchema>;
