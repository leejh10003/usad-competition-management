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
export const EventCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOrderByAggregateInput>;
export const EventCountOrderByAggregateInputObjectZodSchema = makeSchema();
