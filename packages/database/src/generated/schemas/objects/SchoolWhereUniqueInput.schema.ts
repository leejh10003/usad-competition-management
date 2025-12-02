import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  externalSchoolId: z.string().optional(),
  primaryCoachId: z.string().optional(),
  emailDomain: z.string().optional()
}).strict();
export const SchoolWhereUniqueInputObjectSchema: z.ZodType<Prisma.SchoolWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolWhereUniqueInput>;
export const SchoolWhereUniqueInputObjectZodSchema = makeSchema();
