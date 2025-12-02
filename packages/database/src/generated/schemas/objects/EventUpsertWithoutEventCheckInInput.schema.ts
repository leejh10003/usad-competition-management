import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventUpdateWithoutEventCheckInInputObjectSchema as EventUpdateWithoutEventCheckInInputObjectSchema } from './EventUpdateWithoutEventCheckInInput.schema';
import { EventUncheckedUpdateWithoutEventCheckInInputObjectSchema as EventUncheckedUpdateWithoutEventCheckInInputObjectSchema } from './EventUncheckedUpdateWithoutEventCheckInInput.schema';
import { EventCreateWithoutEventCheckInInputObjectSchema as EventCreateWithoutEventCheckInInputObjectSchema } from './EventCreateWithoutEventCheckInInput.schema';
import { EventUncheckedCreateWithoutEventCheckInInputObjectSchema as EventUncheckedCreateWithoutEventCheckInInputObjectSchema } from './EventUncheckedCreateWithoutEventCheckInInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutEventCheckInInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutEventCheckInInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutEventCheckInInput>;
export const EventUpsertWithoutEventCheckInInputObjectZodSchema = makeSchema();
