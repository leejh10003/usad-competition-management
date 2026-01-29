import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const EventMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventMaxOrderByAggregateInput>;
export const EventMaxOrderByAggregateInputObjectZodSchema = makeSchema();
