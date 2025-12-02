import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  checkedInAt: SortOrderSchema.optional()
}).strict();
export const EventCheckInMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInMinOrderByAggregateInput>;
export const EventCheckInMinOrderByAggregateInputObjectZodSchema = makeSchema();
