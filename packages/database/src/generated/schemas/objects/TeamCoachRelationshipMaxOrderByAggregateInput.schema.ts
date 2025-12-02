import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  teamId: SortOrderSchema.optional(),
  coachId: SortOrderSchema.optional()
}).strict();
export const TeamCoachRelationshipMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipMaxOrderByAggregateInput>;
export const TeamCoachRelationshipMaxOrderByAggregateInputObjectZodSchema = makeSchema();
