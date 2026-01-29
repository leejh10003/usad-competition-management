import * as z from 'zod';
export const CompetitionFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  nonRelativeEvents: z.array(z.unknown()),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.unknown().optional(),
  zipCode: z.string().optional()
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