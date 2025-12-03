import * as z from 'zod';
export const EventCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  competition: z.unknown(),
  eventCheckIn: z.array(z.unknown())
});