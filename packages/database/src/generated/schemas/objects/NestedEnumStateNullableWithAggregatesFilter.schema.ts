import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumStateNullableFilterObjectSchema as NestedEnumStateNullableFilterObjectSchema } from './NestedEnumStateNullableFilter.schema'

const nestedenumstatenullablewithaggregatesfilterSchema = z.object({
  equals: StateSchema.optional().nullable(),
  in: StateSchema.array().optional().nullable(),
  notIn: StateSchema.array().optional().nullable(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStateNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStateNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumStateNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStateNullableWithAggregatesFilter> = nestedenumstatenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStateNullableWithAggregatesFilter>;
export const NestedEnumStateNullableWithAggregatesFilterObjectZodSchema = nestedenumstatenullablewithaggregatesfilterSchema;
