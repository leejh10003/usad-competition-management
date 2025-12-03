import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema as EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { SchoolOrderByRelationAggregateInputObjectSchema as SchoolOrderByRelationAggregateInputObjectSchema } from './SchoolOrderByRelationAggregateInput.schema';
import { StudentOrderByRelationAggregateInputObjectSchema as StudentOrderByRelationAggregateInputObjectSchema } from './StudentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  startsAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  events: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolOrderByRelationAggregateInputObjectSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CompetitionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CompetitionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionOrderByWithRelationInput>;
export const CompetitionOrderByWithRelationInputObjectZodSchema = makeSchema();
