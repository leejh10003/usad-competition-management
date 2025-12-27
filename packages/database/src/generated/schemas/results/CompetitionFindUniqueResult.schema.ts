import * as z from 'zod';
export const CompetitionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
  events: z.array(z.unknown()),
  competitionAvailableStates: z.array(z.unknown()),
  schools: z.array(z.unknown()),
  students: z.array(z.unknown()),
  mutationIndex: z.number().int()
}));