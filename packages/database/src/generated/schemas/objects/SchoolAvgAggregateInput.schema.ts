import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  division: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional()
}).strict();
export const SchoolAvgAggregateInputObjectSchema: z.ZodType<Prisma.SchoolAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SchoolAvgAggregateInputType>;
export const SchoolAvgAggregateInputObjectZodSchema = makeSchema();
