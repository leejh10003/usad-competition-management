import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const eventcheckinscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventCheckInScalarWhereInputObjectSchema), z.lazy(() => EventCheckInScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventCheckInScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventCheckInScalarWhereInputObjectSchema), z.lazy(() => EventCheckInScalarWhereInputObjectSchema).array()]).optional(),
  studentId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  checkedInAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const EventCheckInScalarWhereInputObjectSchema: z.ZodType<Prisma.EventCheckInScalarWhereInput> = eventcheckinscalarwhereinputSchema as unknown as z.ZodType<Prisma.EventCheckInScalarWhereInput>;
export const EventCheckInScalarWhereInputObjectZodSchema = eventcheckinscalarwhereinputSchema;
