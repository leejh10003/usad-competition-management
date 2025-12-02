import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutEventCheckInInputObjectSchema as EventCreateWithoutEventCheckInInputObjectSchema } from './EventCreateWithoutEventCheckInInput.schema';
import { EventUncheckedCreateWithoutEventCheckInInputObjectSchema as EventUncheckedCreateWithoutEventCheckInInputObjectSchema } from './EventUncheckedCreateWithoutEventCheckInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutEventCheckInInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutEventCheckInInput>;
export const EventCreateOrConnectWithoutEventCheckInInputObjectZodSchema = makeSchema();
