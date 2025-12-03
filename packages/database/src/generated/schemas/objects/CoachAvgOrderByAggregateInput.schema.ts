import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const CoachAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoachAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachAvgOrderByAggregateInput>;
export const CoachAvgOrderByAggregateInputObjectZodSchema = makeSchema();
