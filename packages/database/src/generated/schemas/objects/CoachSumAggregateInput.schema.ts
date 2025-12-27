import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional()
}).strict();
export const CoachSumAggregateInputObjectSchema: z.ZodType<Prisma.CoachSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CoachSumAggregateInputType>;
export const CoachSumAggregateInputObjectZodSchema = makeSchema();
