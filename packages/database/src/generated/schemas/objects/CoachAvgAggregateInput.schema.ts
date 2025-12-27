import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional()
}).strict();
export const CoachAvgAggregateInputObjectSchema: z.ZodType<Prisma.CoachAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CoachAvgAggregateInputType>;
export const CoachAvgAggregateInputObjectZodSchema = makeSchema();
