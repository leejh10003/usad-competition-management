import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const eventscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  competitionId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const EventScalarWhereInputObjectSchema: z.ZodType<Prisma.EventScalarWhereInput> = eventscalarwhereinputSchema as unknown as z.ZodType<Prisma.EventScalarWhereInput>;
export const EventScalarWhereInputObjectZodSchema = eventscalarwhereinputSchema;
