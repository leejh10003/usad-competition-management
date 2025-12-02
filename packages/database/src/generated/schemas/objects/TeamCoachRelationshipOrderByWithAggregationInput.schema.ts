import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TeamCoachRelationshipCountOrderByAggregateInputObjectSchema as TeamCoachRelationshipCountOrderByAggregateInputObjectSchema } from './TeamCoachRelationshipCountOrderByAggregateInput.schema';
import { TeamCoachRelationshipMaxOrderByAggregateInputObjectSchema as TeamCoachRelationshipMaxOrderByAggregateInputObjectSchema } from './TeamCoachRelationshipMaxOrderByAggregateInput.schema';
import { TeamCoachRelationshipMinOrderByAggregateInputObjectSchema as TeamCoachRelationshipMinOrderByAggregateInputObjectSchema } from './TeamCoachRelationshipMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  teamId: SortOrderSchema.optional(),
  coachId: SortOrderSchema.optional(),
  _count: z.lazy(() => TeamCoachRelationshipCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TeamCoachRelationshipMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TeamCoachRelationshipMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipOrderByWithAggregationInput>;
export const TeamCoachRelationshipOrderByWithAggregationInputObjectZodSchema = makeSchema();
