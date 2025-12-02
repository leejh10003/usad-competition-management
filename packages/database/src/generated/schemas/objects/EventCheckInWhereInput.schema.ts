import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StudentScalarRelationFilterObjectSchema as StudentScalarRelationFilterObjectSchema } from './StudentScalarRelationFilter.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const eventcheckinwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventCheckInWhereInputObjectSchema), z.lazy(() => EventCheckInWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventCheckInWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventCheckInWhereInputObjectSchema), z.lazy(() => EventCheckInWhereInputObjectSchema).array()]).optional(),
  studentId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  checkedInAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  student: z.union([z.lazy(() => StudentScalarRelationFilterObjectSchema), z.lazy(() => StudentWhereInputObjectSchema)]).optional(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional()
}).strict();
export const EventCheckInWhereInputObjectSchema: z.ZodType<Prisma.EventCheckInWhereInput> = eventcheckinwhereinputSchema as unknown as z.ZodType<Prisma.EventCheckInWhereInput>;
export const EventCheckInWhereInputObjectZodSchema = eventcheckinwhereinputSchema;
