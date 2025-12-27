import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionAvailableStateCountOrderByAggregateInputObjectSchema as CompetitionAvailableStateCountOrderByAggregateInputObjectSchema } from './CompetitionAvailableStateCountOrderByAggregateInput.schema';
import { CompetitionAvailableStateMaxOrderByAggregateInputObjectSchema as CompetitionAvailableStateMaxOrderByAggregateInputObjectSchema } from './CompetitionAvailableStateMaxOrderByAggregateInput.schema';
import { CompetitionAvailableStateMinOrderByAggregateInputObjectSchema as CompetitionAvailableStateMinOrderByAggregateInputObjectSchema } from './CompetitionAvailableStateMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  competitionId: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  _count: z.lazy(() => CompetitionAvailableStateCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompetitionAvailableStateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompetitionAvailableStateMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateOrderByWithAggregationInput>;
export const CompetitionAvailableStateOrderByWithAggregationInputObjectZodSchema = makeSchema();
