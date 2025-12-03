import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const eventscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  startsAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endsAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  competitionId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  mutationIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const EventScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = eventscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EventScalarWhereWithAggregatesInput>;
export const EventScalarWhereWithAggregatesInputObjectZodSchema = eventscalarwherewithaggregatesinputSchema;
