import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  division: SortOrderSchema.optional()
}).strict();
export const SchoolSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SchoolSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolSumOrderByAggregateInput>;
export const SchoolSumOrderByAggregateInputObjectZodSchema = makeSchema();
