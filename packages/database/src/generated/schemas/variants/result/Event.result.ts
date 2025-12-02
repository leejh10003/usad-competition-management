import * as z from 'zod';
// prettier-ignore
export const EventResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    competitionId: z.string(),
    competition: z.unknown(),
    eventCheckIn: z.array(z.unknown())
}).strict();

export type EventResultType = z.infer<typeof EventResultSchema>;
