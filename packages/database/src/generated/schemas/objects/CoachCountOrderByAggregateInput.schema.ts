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
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional()
}).strict();
export const CoachCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CoachCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCountOrderByAggregateInput>;
export const CoachCountOrderByAggregateInputObjectZodSchema = makeSchema();
