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
export const TeamMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamMaxOrderByAggregateInput>;
export const TeamMaxOrderByAggregateInputObjectZodSchema = makeSchema();
