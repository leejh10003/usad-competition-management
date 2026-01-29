import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema'

const makeSchema = () => z.object({
  equals: NonRelativeEventsSchema.array().optional().nullable(),
  has: NonRelativeEventsSchema.optional().nullable(),
  hasEvery: NonRelativeEventsSchema.array().optional(),
  hasSome: NonRelativeEventsSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumNonRelativeEventsNullableListFilterObjectSchema: z.ZodType<Prisma.EnumNonRelativeEventsNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNonRelativeEventsNullableListFilter>;
export const EnumNonRelativeEventsNullableListFilterObjectZodSchema = makeSchema();
