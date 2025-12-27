import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const nestedenumstatefilterSchema = z.object({
  equals: StateSchema.optional(),
  in: StateSchema.array().optional(),
  notIn: StateSchema.array().optional(),
  not: z.union([StateSchema, z.lazy(() => NestedEnumStateFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStateFilterObjectSchema: z.ZodType<Prisma.NestedEnumStateFilter> = nestedenumstatefilterSchema as unknown as z.ZodType<Prisma.NestedEnumStateFilter>;
export const NestedEnumStateFilterObjectZodSchema = nestedenumstatefilterSchema;
