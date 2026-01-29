import * as z from 'zod';
import { RelativeEventsSchema } from '../../enums/RelativeEvents.schema';
// prettier-ignore
export const EventResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    competitionId: z.string(),
    mutationIndex: z.number().int(),
    competition: z.unknown(),
    type: RelativeEventsSchema,
    eventCheckIn: z.array(z.unknown())
}).strict();

export type EventResultType = z.infer<typeof EventResultSchema>;
