import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const EventCheckInAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInAvgOrderByAggregateInput>;
export const EventCheckInAvgOrderByAggregateInputObjectZodSchema = makeSchema();
