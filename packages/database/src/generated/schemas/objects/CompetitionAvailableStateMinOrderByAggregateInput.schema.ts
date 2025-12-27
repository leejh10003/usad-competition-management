import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  competitionId: SortOrderSchema.optional(),
  state: SortOrderSchema.optional()
}).strict();
export const CompetitionAvailableStateMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateMinOrderByAggregateInput>;
export const CompetitionAvailableStateMinOrderByAggregateInputObjectZodSchema = makeSchema();
