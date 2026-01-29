import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { NestedEnumRelativeEventsFilterObjectSchema as NestedEnumRelativeEventsFilterObjectSchema } from './NestedEnumRelativeEventsFilter.schema'

const makeSchema = () => z.object({
  equals: RelativeEventsSchema.optional(),
  in: RelativeEventsSchema.array().optional(),
  notIn: RelativeEventsSchema.array().optional(),
  not: z.union([RelativeEventsSchema, z.lazy(() => NestedEnumRelativeEventsFilterObjectSchema)]).optional()
}).strict();
export const EnumRelativeEventsFilterObjectSchema: z.ZodType<Prisma.EnumRelativeEventsFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRelativeEventsFilter>;
export const EnumRelativeEventsFilterObjectZodSchema = makeSchema();
