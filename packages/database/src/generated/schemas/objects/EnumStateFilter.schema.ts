import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { NestedEnumStateFilterObjectSchema as NestedEnumStateFilterObjectSchema } from './NestedEnumStateFilter.schema'

const makeSchema = () => z.object({
  equals: StateSchema.optional(),
  in: StateSchema.array().optional(),
  notIn: StateSchema.array().optional(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateFilterObjectSchema)]).optional()
}).strict();
export const EnumStateFilterObjectSchema: z.ZodType<Prisma.EnumStateFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStateFilter>;
export const EnumStateFilterObjectZodSchema = makeSchema();
