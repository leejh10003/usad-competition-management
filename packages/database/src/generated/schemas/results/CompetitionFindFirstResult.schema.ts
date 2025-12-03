import * as z from 'zod';
export const CompetitionFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  events: z.array(z.unknown()),
  state: z.unknown().optional(),
  schools: z.array(z.unknown()),
  students: z.array(z.unknown()),
  mutationIndex: z.number().int()
}));