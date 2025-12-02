import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional()
}).strict();
export const EventMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventMinOrderByAggregateInput>;
export const EventMinOrderByAggregateInputObjectZodSchema = makeSchema();
