import * as z from 'zod';
export const CompetitionAvailableStateGroupByResultSchema = z.array(z.object({
  competitionId: z.string(),
  _count: z.object({
    competitionId: z.number(),
    state: z.number(),
    competition: z.number()
  }).optional(),
  _min: z.object({
    competitionId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    competitionId: z.string().nullable()
  }).nullable().optional()
}));