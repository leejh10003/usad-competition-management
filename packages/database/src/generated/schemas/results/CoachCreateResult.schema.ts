import * as z from 'zod';
export const CoachCreateResultSchema = z.object({
  id: z.string(),
  externalCoachId: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  signature: z.string().optional(),
  objectiveScore: z.number().optional(),
  subjectiveScore: z.number().optional(),
  schoolId: z.string(),
  school: z.unknown(),
  primarySchool: z.unknown().optional(),
  teamRelationship: z.array(z.unknown())
});