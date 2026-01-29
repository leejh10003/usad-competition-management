import * as z from 'zod';
export const EventUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  competition: z.unknown(),
  type: z.unknown(),
  eventCheckIn: z.array(z.unknown())
});