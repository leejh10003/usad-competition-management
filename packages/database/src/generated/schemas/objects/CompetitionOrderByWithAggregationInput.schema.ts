import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompetitionCountOrderByAggregateInputObjectSchema as CompetitionCountOrderByAggregateInputObjectSchema } from './CompetitionCountOrderByAggregateInput.schema';
import { CompetitionAvgOrderByAggregateInputObjectSchema as CompetitionAvgOrderByAggregateInputObjectSchema } from './CompetitionAvgOrderByAggregateInput.schema';
import { CompetitionMaxOrderByAggregateInputObjectSchema as CompetitionMaxOrderByAggregateInputObjectSchema } from './CompetitionMaxOrderByAggregateInput.schema';
import { CompetitionMinOrderByAggregateInputObjectSchema as CompetitionMinOrderByAggregateInputObjectSchema } from './CompetitionMinOrderByAggregateInput.schema';
import { CompetitionSumOrderByAggregateInputObjectSchema as CompetitionSumOrderByAggregateInputObjectSchema } from './CompetitionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  _count: z.lazy(() => CompetitionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CompetitionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompetitionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompetitionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CompetitionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompetitionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompetitionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionOrderByWithAggregationInput>;
export const CompetitionOrderByWithAggregationInputObjectZodSchema = makeSchema();
