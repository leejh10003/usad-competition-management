import * as z from 'zod';
import { NonRelativeEventsSchema } from '../../enums/NonRelativeEvents.schema';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    events: z.array(z.unknown()),
    competitionAvailableStates: z.array(z.unknown()),
    schools: z.array(z.unknown()),
    students: z.array(z.unknown()),
    mutationIndex: z.number().int(),
    round: z.number().int(),
    nonRelativeEvents: NonRelativeEventsSchema.array(),
    streetAddress: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    state: StateSchema.optional().nullable(),
    zipCode: z.string().optional().nullable()
}).strict();

export type CompetitionInputType = z.infer<typeof CompetitionInputSchema>;
