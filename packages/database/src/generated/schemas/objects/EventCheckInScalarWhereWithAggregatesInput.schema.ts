import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const eventcheckinscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EventCheckInScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventCheckInScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventCheckInScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventCheckInScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventCheckInScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  studentId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  checkedInAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const EventCheckInScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EventCheckInScalarWhereWithAggregatesInput> = eventcheckinscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EventCheckInScalarWhereWithAggregatesInput>;
export const EventCheckInScalarWhereWithAggregatesInputObjectZodSchema = eventcheckinscalarwherewithaggregatesinputSchema;
