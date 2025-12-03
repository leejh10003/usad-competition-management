import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const CompetitionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvgOrderByAggregateInput>;
export const CompetitionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
