import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  division: SortOrderSchema.optional(),
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional()
}).strict();
export const TeamSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamSumOrderByAggregateInput>;
export const TeamSumOrderByAggregateInputObjectZodSchema = makeSchema();
