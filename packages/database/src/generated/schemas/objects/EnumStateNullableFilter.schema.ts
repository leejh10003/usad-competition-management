import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedEnumStateNullableFilterObjectSchema as NestedEnumStateNullableFilterObjectSchema } from './NestedEnumStateNullableFilter.schema'

const makeSchema = () => z.object({
  equals: StateSchema.optional().nullable(),
  in: StateSchema.array().optional().nullable(),
  notIn: StateSchema.array().optional().nullable(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumStateNullableFilterObjectSchema: z.ZodType<Prisma.EnumStateNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStateNullableFilter>;
export const EnumStateNullableFilterObjectZodSchema = makeSchema();
