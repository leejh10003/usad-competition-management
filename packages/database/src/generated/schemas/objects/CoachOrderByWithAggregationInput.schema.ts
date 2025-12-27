import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CoachCountOrderByAggregateInputObjectSchema as CoachCountOrderByAggregateInputObjectSchema } from './CoachCountOrderByAggregateInput.schema';
import { CoachAvgOrderByAggregateInputObjectSchema as CoachAvgOrderByAggregateInputObjectSchema } from './CoachAvgOrderByAggregateInput.schema';
import { CoachMaxOrderByAggregateInputObjectSchema as CoachMaxOrderByAggregateInputObjectSchema } from './CoachMaxOrderByAggregateInput.schema';
import { CoachMinOrderByAggregateInputObjectSchema as CoachMinOrderByAggregateInputObjectSchema } from './CoachMinOrderByAggregateInput.schema';
import { CoachSumOrderByAggregateInputObjectSchema as CoachSumOrderByAggregateInputObjectSchema } from './CoachSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalCoachId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  signature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional(),
  _count: z.lazy(() => CoachCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CoachAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CoachMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CoachMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CoachSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CoachOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CoachOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachOrderByWithAggregationInput>;
export const CoachOrderByWithAggregationInputObjectZodSchema = makeSchema();
