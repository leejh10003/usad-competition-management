import * as z from 'zod';
export const CoachFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  externalCoachId: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  signature: z.string().optional(),
  mutationIndex: z.number().int(),
  schoolId: z.string(),
  school: z.unknown(),
  primarySchool: z.unknown().optional(),
  teamRelationship: z.array(z.unknown())
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