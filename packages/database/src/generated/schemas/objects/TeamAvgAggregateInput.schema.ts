import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  division: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional()
}).strict();
export const TeamAvgAggregateInputObjectSchema: z.ZodType<Prisma.TeamAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamAvgAggregateInputType>;
export const TeamAvgAggregateInputObjectZodSchema = makeSchema();
