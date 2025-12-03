import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  division: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const SchoolAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SchoolAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolAvgOrderByAggregateInput>;
export const SchoolAvgOrderByAggregateInputObjectZodSchema = makeSchema();
