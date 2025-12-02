import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateWithoutEventInputObjectSchema as EventCheckInCreateWithoutEventInputObjectSchema } from './EventCheckInCreateWithoutEventInput.schema';
import { EventCheckInUncheckedCreateWithoutEventInputObjectSchema as EventCheckInUncheckedCreateWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateWithoutEventInput.schema';
import { EventCheckInCreateOrConnectWithoutEventInputObjectSchema as EventCheckInCreateOrConnectWithoutEventInputObjectSchema } from './EventCheckInCreateOrConnectWithoutEventInput.schema';
import { EventCheckInCreateManyEventInputEnvelopeObjectSchema as EventCheckInCreateManyEventInputEnvelopeObjectSchema } from './EventCheckInCreateManyEventInputEnvelope.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema).array(), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCheckInCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => EventCheckInCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCheckInCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedCreateNestedManyWithoutEventInput>;
export const EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
