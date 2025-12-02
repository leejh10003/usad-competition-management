import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  checkedInAt: SortOrderSchema.optional()
}).strict();
export const EventCheckInMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInMaxOrderByAggregateInput>;
export const EventCheckInMaxOrderByAggregateInputObjectZodSchema = makeSchema();
