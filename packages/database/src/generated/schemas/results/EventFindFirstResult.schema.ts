import * as z from 'zod';
export const EventFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  competitionId: z.string(),
  competition: z.unknown(),
  eventCheckIn: z.array(z.unknown())
}));