import * as z from 'zod';
export const TeamFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  externalTeamId: z.string().optional(),
  schoolId: z.string(),
  school: z.unknown(),
  division: z.number().int().optional(),
  objectiveScore: z.number().optional(),
  subjectiveScore: z.number().optional(),
  coachesRelationship: z.array(z.unknown()),
  students: z.array(z.unknown())
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