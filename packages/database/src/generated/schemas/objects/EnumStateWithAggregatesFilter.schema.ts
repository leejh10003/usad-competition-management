import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedEnumStateWithAggregatesFilterObjectSchema as NestedEnumStateWithAggregatesFilterObjectSchema } from './NestedEnumStateWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStateFilterObjectSchema as NestedEnumStateFilterObjectSchema } from './NestedEnumStateFilter.schema'

const makeSchema = () => z.object({
  equals: StateSchema.optional(),
  in: StateSchema.array().optional(),
  notIn: StateSchema.array().optional(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStateFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStateFilterObjectSchema).optional()
}).strict();
export const EnumStateWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStateWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStateWithAggregatesFilter>;
export const EnumStateWithAggregatesFilterObjectZodSchema = makeSchema();
