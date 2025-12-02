import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventCountOrderByAggregateInputObjectSchema as EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema as EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema as EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithAggregationInput>;
export const EventOrderByWithAggregationInputObjectZodSchema = makeSchema();
