import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TeamOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamOrderByRelationAggregateInput>;
export const TeamOrderByRelationAggregateInputObjectZodSchema = makeSchema();
