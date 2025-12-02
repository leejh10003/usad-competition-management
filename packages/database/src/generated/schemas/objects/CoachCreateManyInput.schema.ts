import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  externalCoachId: z.string().optional().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  schoolId: z.string()
}).strict();
export const CoachCreateManyInputObjectSchema: z.ZodType<Prisma.CoachCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateManyInput>;
export const CoachCreateManyInputObjectZodSchema = makeSchema();
