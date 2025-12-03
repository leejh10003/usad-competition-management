import * as z from 'zod';
// prettier-ignore
export const EventModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    competitionId: z.string(),
    mutationIndex: z.number().int(),
    competition: z.unknown(),
    eventCheckIn: z.array(z.unknown())
}).strict();

export type EventPureType = z.infer<typeof EventModelSchema>;
