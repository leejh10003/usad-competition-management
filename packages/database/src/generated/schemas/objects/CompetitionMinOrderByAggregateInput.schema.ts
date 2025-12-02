import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  state: SortOrderSchema.optional()
}).strict();
export const CompetitionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionMinOrderByAggregateInput>;
export const CompetitionMinOrderByAggregateInputObjectZodSchema = makeSchema();
