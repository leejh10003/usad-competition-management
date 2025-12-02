import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInCreateWithoutEventInputObjectSchema as EventCheckInCreateWithoutEventInputObjectSchema } from './EventCheckInCreateWithoutEventInput.schema';
import { EventCheckInUncheckedCreateWithoutEventInputObjectSchema as EventCheckInUncheckedCreateWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const EventCheckInCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateOrConnectWithoutEventInput>;
export const EventCheckInCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
