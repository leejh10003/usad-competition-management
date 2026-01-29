import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema'

const nestedenumrelativeeventsfilterSchema = z.object({
  equals: RelativeEventsSchema.optional(),
  in: RelativeEventsSchema.array().optional(),
  notIn: RelativeEventsSchema.array().optional(),
  not: z.union([RelativeEventsSchema, z.lazy(() => NestedEnumRelativeEventsFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRelativeEventsFilterObjectSchema: z.ZodType<Prisma.NestedEnumRelativeEventsFilter> = nestedenumrelativeeventsfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRelativeEventsFilter>;
export const NestedEnumRelativeEventsFilterObjectZodSchema = nestedenumrelativeeventsfilterSchema;
