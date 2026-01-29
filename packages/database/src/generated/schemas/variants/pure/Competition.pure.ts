import * as z from 'zod';
import { NonRelativeEventsSchema } from '../../enums/NonRelativeEvents.schema';
import { StateSchema } from '../../enums/State.schema';
// prettier-ignore
export const CompetitionModelSchema = z.object({
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
    streetAddress: z.string().nullable(),
    city: z.string().nullable(),
    state: StateSchema.nullable(),
    zipCode: z.string().nullable()
}).strict();

export type CompetitionPureType = z.infer<typeof CompetitionModelSchema>;
