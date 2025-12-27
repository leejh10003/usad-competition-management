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
  mutationIndex: z.number().int()
}).strict();
export const CoachCreateManySchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateManySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateManySchoolInput>;
export const CoachCreateManySchoolInputObjectZodSchema = makeSchema();
