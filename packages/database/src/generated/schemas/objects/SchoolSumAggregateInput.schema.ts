import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  division: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional()
}).strict();
export const SchoolSumAggregateInputObjectSchema: z.ZodType<Prisma.SchoolSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SchoolSumAggregateInputType>;
export const SchoolSumAggregateInputObjectZodSchema = makeSchema();
