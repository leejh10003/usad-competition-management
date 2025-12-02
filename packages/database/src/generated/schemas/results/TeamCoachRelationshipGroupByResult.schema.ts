import * as z from 'zod';
export const TeamCoachRelationshipGroupByResultSchema = z.array(z.object({
  teamId: z.string(),
  coachId: z.string(),
  _count: z.object({
    teamId: z.number(),
    team: z.number(),
    coachId: z.number(),
    coach: z.number()
  }).optional(),
  _min: z.object({
    teamId: z.string().nullable(),
    coachId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    teamId: z.string().nullable(),
    coachId: z.string().nullable()
  }).nullable().optional()
}));