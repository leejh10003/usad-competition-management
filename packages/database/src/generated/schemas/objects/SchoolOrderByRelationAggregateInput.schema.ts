import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SchoolOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SchoolOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolOrderByRelationAggregateInput>;
export const SchoolOrderByRelationAggregateInputObjectZodSchema = makeSchema();
