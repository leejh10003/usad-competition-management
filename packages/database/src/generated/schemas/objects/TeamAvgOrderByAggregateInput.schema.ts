import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  division: SortOrderSchema.optional(),
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional()
}).strict();
export const TeamAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamAvgOrderByAggregateInput>;
export const TeamAvgOrderByAggregateInputObjectZodSchema = makeSchema();
