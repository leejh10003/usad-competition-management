import * as z from 'zod';
export const SchoolFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  externalSchoolId: z.string().optional(),
  name: z.string(),
  isVirtual: z.boolean(),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.unknown().optional(),
  zipCode: z.string().optional(),
  phone: z.string().optional(),
  principalName: z.string().optional(),
  principalEmail: z.string().optional(),
  primaryCoachId: z.string().optional(),
  primaryCoach: z.unknown().optional(),
  emailDomain: z.string().optional(),
  division: z.number().int().optional(),
  competitionId: z.string(),
  competition: z.unknown(),
  coaches: z.array(z.unknown()),
  teams: z.array(z.unknown()),
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