import * as z from 'zod';
export const CompetitionFindFirstResultSchema = z.nullable(z.object({
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
}));