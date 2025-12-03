import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  division: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional()
}).strict();
export const TeamSumAggregateInputObjectSchema: z.ZodType<Prisma.TeamSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamSumAggregateInputType>;
export const TeamSumAggregateInputObjectZodSchema = makeSchema();
