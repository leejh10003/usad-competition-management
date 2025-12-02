import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutEventCheckInInputObjectSchema as EventCreateWithoutEventCheckInInputObjectSchema } from './EventCreateWithoutEventCheckInInput.schema';
import { EventUncheckedCreateWithoutEventCheckInInputObjectSchema as EventUncheckedCreateWithoutEventCheckInInputObjectSchema } from './EventUncheckedCreateWithoutEventCheckInInput.schema';
import { EventCreateOrConnectWithoutEventCheckInInputObjectSchema as EventCreateOrConnectWithoutEventCheckInInputObjectSchema } from './EventCreateOrConnectWithoutEventCheckInInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutEventCheckInInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutEventCheckInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutEventCheckInInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutEventCheckInInput>;
export const EventCreateNestedOneWithoutEventCheckInInputObjectZodSchema = makeSchema();
