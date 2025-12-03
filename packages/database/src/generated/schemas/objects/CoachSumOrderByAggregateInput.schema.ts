import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const CoachSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoachSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachSumOrderByAggregateInput>;
export const CoachSumOrderByAggregateInputObjectZodSchema = makeSchema();
