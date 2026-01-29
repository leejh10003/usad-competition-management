import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { NestedEnumRelativeEventsWithAggregatesFilterObjectSchema as NestedEnumRelativeEventsWithAggregatesFilterObjectSchema } from './NestedEnumRelativeEventsWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRelativeEventsFilterObjectSchema as NestedEnumRelativeEventsFilterObjectSchema } from './NestedEnumRelativeEventsFilter.schema'

const makeSchema = () => z.object({
  equals: RelativeEventsSchema.optional(),
  in: RelativeEventsSchema.array().optional(),
  notIn: RelativeEventsSchema.array().optional(),
  not: z.union([RelativeEventsSchema, z.lazy(() => NestedEnumRelativeEventsWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRelativeEventsFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRelativeEventsFilterObjectSchema).optional()
}).strict();
export const EnumRelativeEventsWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRelativeEventsWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRelativeEventsWithAggregatesFilter>;
export const EnumRelativeEventsWithAggregatesFilterObjectZodSchema = makeSchema();
