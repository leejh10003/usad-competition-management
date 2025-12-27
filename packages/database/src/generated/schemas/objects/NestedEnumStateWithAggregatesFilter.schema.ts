import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStateFilterObjectSchema as NestedEnumStateFilterObjectSchema } from './NestedEnumStateFilter.schema'

const nestedenumstatewithaggregatesfilterSchema = z.object({
  equals: StateSchema.optional(),
  in: StateSchema.array().optional(),
  notIn: StateSchema.array().optional(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStateFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStateFilterObjectSchema).optional()
}).strict();
export const NestedEnumStateWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStateWithAggregatesFilter> = nestedenumstatewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStateWithAggregatesFilter>;
export const NestedEnumStateWithAggregatesFilterObjectZodSchema = nestedenumstatewithaggregatesfilterSchema;
