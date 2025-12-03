import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  gpa: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const StudentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentSumOrderByAggregateInput>;
export const StudentSumOrderByAggregateInputObjectZodSchema = makeSchema();
