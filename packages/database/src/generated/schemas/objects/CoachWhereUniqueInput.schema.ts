import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  externalCoachId: z.string().optional(),
  email: z.string().optional()
}).strict();
export const CoachWhereUniqueInputObjectSchema: z.ZodType<Prisma.CoachWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachWhereUniqueInput>;
export const CoachWhereUniqueInputObjectZodSchema = makeSchema();
