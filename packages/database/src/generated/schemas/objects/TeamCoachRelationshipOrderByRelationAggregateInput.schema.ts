import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipOrderByRelationAggregateInput>;
export const TeamCoachRelationshipOrderByRelationAggregateInputObjectZodSchema = makeSchema();
