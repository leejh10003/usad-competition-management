import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const nestedenumstatenullablefilterSchema = z.object({
  equals: StateSchema.optional().nullable(),
  in: StateSchema.array().optional().nullable(),
  notIn: StateSchema.array().optional().nullable(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumStateNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumStateNullableFilter> = nestedenumstatenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumStateNullableFilter>;
export const NestedEnumStateNullableFilterObjectZodSchema = nestedenumstatenullablefilterSchema;
