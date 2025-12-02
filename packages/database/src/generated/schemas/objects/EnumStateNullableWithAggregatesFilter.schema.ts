import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedEnumStateNullableWithAggregatesFilterObjectSchema as NestedEnumStateNullableWithAggregatesFilterObjectSchema } from './NestedEnumStateNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumStateNullableFilterObjectSchema as NestedEnumStateNullableFilterObjectSchema } from './NestedEnumStateNullableFilter.schema'

const makeSchema = () => z.object({
  equals: StateSchema.optional().nullable(),
  in: StateSchema.array().optional().nullable(),
  notIn: StateSchema.array().optional().nullable(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStateNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStateNullableFilterObjectSchema).optional()
}).strict();
export const EnumStateNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStateNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStateNullableWithAggregatesFilter>;
export const EnumStateNullableWithAggregatesFilterObjectZodSchema = makeSchema();
