import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const EventCheckInSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInSumOrderByAggregateInput>;
export const EventCheckInSumOrderByAggregateInputObjectZodSchema = makeSchema();
