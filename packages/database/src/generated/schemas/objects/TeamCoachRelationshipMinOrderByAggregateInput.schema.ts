import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  teamId: SortOrderSchema.optional(),
  coachId: SortOrderSchema.optional()
}).strict();
export const TeamCoachRelationshipMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipMinOrderByAggregateInput>;
export const TeamCoachRelationshipMinOrderByAggregateInputObjectZodSchema = makeSchema();
