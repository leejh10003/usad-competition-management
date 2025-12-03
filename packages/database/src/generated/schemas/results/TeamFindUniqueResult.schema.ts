import * as z from 'zod';
export const TeamFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  externalTeamId: z.string().optional(),
  schoolId: z.string(),
  school: z.unknown(),
  division: z.number().int().optional(),
  objectiveScore: z.number().optional(),
  subjectiveScore: z.number().optional(),
  mutationIndex: z.number().int(),
  coachesRelationship: z.array(z.unknown()),
  students: z.array(z.unknown())
}));