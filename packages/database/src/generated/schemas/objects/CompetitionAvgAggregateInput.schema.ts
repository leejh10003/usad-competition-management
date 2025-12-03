import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional()
}).strict();
export const CompetitionAvgAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvgAggregateInputType>;
export const CompetitionAvgAggregateInputObjectZodSchema = makeSchema();
