import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './CompetitionOrderByWithRelationInput.schema';
import { EventCheckInOrderByRelationAggregateInputObjectSchema as EventCheckInOrderByRelationAggregateInputObjectSchema } from './EventCheckInOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  competition: z.lazy(() => CompetitionOrderByWithRelationInputObjectSchema).optional(),
  eventCheckIn: z.lazy(() => EventCheckInOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithRelationInput>;
export const EventOrderByWithRelationInputObjectZodSchema = makeSchema();
