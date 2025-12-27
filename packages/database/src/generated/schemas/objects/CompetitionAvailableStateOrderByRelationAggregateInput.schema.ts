import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CompetitionAvailableStateOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateOrderByRelationAggregateInput>;
export const CompetitionAvailableStateOrderByRelationAggregateInputObjectZodSchema = makeSchema();
