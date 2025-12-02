import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  gpa: SortOrderSchema.optional()
}).strict();
export const StudentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentAvgOrderByAggregateInput>;
export const StudentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
