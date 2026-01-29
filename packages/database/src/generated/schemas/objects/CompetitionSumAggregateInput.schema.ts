import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional(),
  round: z.literal(true).optional()
}).strict();
export const CompetitionSumAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionSumAggregateInputType>;
export const CompetitionSumAggregateInputObjectZodSchema = makeSchema();
