import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutEventCheckInInputObjectSchema as EventCreateWithoutEventCheckInInputObjectSchema } from './EventCreateWithoutEventCheckInInput.schema';
import { EventUncheckedCreateWithoutEventCheckInInputObjectSchema as EventUncheckedCreateWithoutEventCheckInInputObjectSchema } from './EventUncheckedCreateWithoutEventCheckInInput.schema';
import { EventCreateOrConnectWithoutEventCheckInInputObjectSchema as EventCreateOrConnectWithoutEventCheckInInputObjectSchema } from './EventCreateOrConnectWithoutEventCheckInInput.schema';
import { EventUpsertWithoutEventCheckInInputObjectSchema as EventUpsertWithoutEventCheckInInputObjectSchema } from './EventUpsertWithoutEventCheckInInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutEventCheckInInputObjectSchema as EventUpdateToOneWithWhereWithoutEventCheckInInputObjectSchema } from './EventUpdateToOneWithWhereWithoutEventCheckInInput.schema';
import { EventUpdateWithoutEventCheckInInputObjectSchema as EventUpdateWithoutEventCheckInInputObjectSchema } from './EventUpdateWithoutEventCheckInInput.schema';
import { EventUncheckedUpdateWithoutEventCheckInInputObjectSchema as EventUncheckedUpdateWithoutEventCheckInInputObjectSchema } from './EventUncheckedUpdateWithoutEventCheckInInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutEventCheckInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutEventCheckInInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutEventCheckInInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUpdateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutEventCheckInInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutEventCheckInNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneRequiredWithoutEventCheckInNestedInput>;
export const EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectZodSchema = makeSchema();
