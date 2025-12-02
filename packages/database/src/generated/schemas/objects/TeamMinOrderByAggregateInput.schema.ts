import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalTeamId: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional(),
  division: SortOrderSchema.optional(),
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional()
}).strict();
export const TeamMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamMinOrderByAggregateInput>;
export const TeamMinOrderByAggregateInputObjectZodSchema = makeSchema();
