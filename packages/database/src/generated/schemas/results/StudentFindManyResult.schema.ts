import * as z from 'zod';
export const StudentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  externalStudentId: z.string().optional(),
  division: z.unknown(),
  gpa: z.number().optional(),
  firstName: z.string(),
  lastName: z.string(),
  usadPin: z.string().optional(),
  signature: z.string().optional(),
  attachmentOnRegistering: z.string().optional(),
  streetAddress: z.string().optional(),
  city: z.string().optional(),
  state: z.unknown().optional(),
  zipCode: z.string().optional(),
  guardianFirstName: z.string().optional(),
  guardianLastName: z.string().optional(),
  guardianPhone: z.string().optional(),
  guardianEmail: z.string().optional(),
  mutationIndex: z.number().int(),
  teamId: z.string().optional(),
  team: z.unknown().optional(),
  schoolId: z.string().optional(),
  school: z.unknown().optional(),
  competitionId: z.string().optional(),
  competition: z.unknown().optional(),
  eventCheckIns: z.array(z.unknown())
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