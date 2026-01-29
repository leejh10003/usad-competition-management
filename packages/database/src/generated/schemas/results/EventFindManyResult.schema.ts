import * as z from 'zod';
export const EventFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  competitionId: z.string(),
  mutationIndex: z.number().int(),
  competition: z.unknown(),
  type: z.unknown(),
  eventCheckIn: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});