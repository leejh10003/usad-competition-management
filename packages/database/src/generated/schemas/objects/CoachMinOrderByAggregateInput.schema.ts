import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalCoachId: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  signature: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional()
}).strict();
export const CoachMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoachMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachMinOrderByAggregateInput>;
export const CoachMinOrderByAggregateInputObjectZodSchema = makeSchema();
