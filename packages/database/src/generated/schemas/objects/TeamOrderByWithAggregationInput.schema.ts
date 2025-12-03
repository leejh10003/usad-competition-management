import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TeamCountOrderByAggregateInputObjectSchema as TeamCountOrderByAggregateInputObjectSchema } from './TeamCountOrderByAggregateInput.schema';
import { TeamAvgOrderByAggregateInputObjectSchema as TeamAvgOrderByAggregateInputObjectSchema } from './TeamAvgOrderByAggregateInput.schema';
import { TeamMaxOrderByAggregateInputObjectSchema as TeamMaxOrderByAggregateInputObjectSchema } from './TeamMaxOrderByAggregateInput.schema';
import { TeamMinOrderByAggregateInputObjectSchema as TeamMinOrderByAggregateInputObjectSchema } from './TeamMinOrderByAggregateInput.schema';
import { TeamSumOrderByAggregateInputObjectSchema as TeamSumOrderByAggregateInputObjectSchema } from './TeamSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalTeamId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  schoolId: SortOrderSchema.optional(),
  division: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  objectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subjectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TeamAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TeamSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TeamOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamOrderByWithAggregationInput>;
export const TeamOrderByWithAggregationInputObjectZodSchema = makeSchema();
