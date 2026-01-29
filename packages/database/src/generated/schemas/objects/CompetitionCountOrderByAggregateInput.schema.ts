import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  round: SortOrderSchema.optional(),
  nonRelativeEvents: SortOrderSchema.optional(),
  streetAddress: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zipCode: SortOrderSchema.optional()
}).strict();
export const CompetitionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCountOrderByAggregateInput>;
export const CompetitionCountOrderByAggregateInputObjectZodSchema = makeSchema();
