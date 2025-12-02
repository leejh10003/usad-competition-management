import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventCheckInCountOrderByAggregateInputObjectSchema as EventCheckInCountOrderByAggregateInputObjectSchema } from './EventCheckInCountOrderByAggregateInput.schema';
import { EventCheckInMaxOrderByAggregateInputObjectSchema as EventCheckInMaxOrderByAggregateInputObjectSchema } from './EventCheckInMaxOrderByAggregateInput.schema';
import { EventCheckInMinOrderByAggregateInputObjectSchema as EventCheckInMinOrderByAggregateInputObjectSchema } from './EventCheckInMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  checkedInAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => EventCheckInCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EventCheckInMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EventCheckInMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EventCheckInOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EventCheckInOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInOrderByWithAggregationInput>;
export const EventCheckInOrderByWithAggregationInputObjectZodSchema = makeSchema();
