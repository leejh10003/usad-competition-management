import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateWithoutEventInputObjectSchema as EventCheckInCreateWithoutEventInputObjectSchema } from './EventCheckInCreateWithoutEventInput.schema';
import { EventCheckInUncheckedCreateWithoutEventInputObjectSchema as EventCheckInUncheckedCreateWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateWithoutEventInput.schema';
import { EventCheckInCreateOrConnectWithoutEventInputObjectSchema as EventCheckInCreateOrConnectWithoutEventInputObjectSchema } from './EventCheckInCreateOrConnectWithoutEventInput.schema';
import { EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectSchema as EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './EventCheckInUpsertWithWhereUniqueWithoutEventInput.schema';
import { EventCheckInCreateManyEventInputEnvelopeObjectSchema as EventCheckInCreateManyEventInputEnvelopeObjectSchema } from './EventCheckInCreateManyEventInputEnvelope.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectSchema as EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './EventCheckInUpdateWithWhereUniqueWithoutEventInput.schema';
import { EventCheckInUpdateManyWithWhereWithoutEventInputObjectSchema as EventCheckInUpdateManyWithWhereWithoutEventInputObjectSchema } from './EventCheckInUpdateManyWithWhereWithoutEventInput.schema';
import { EventCheckInScalarWhereInputObjectSchema as EventCheckInScalarWhereInputObjectSchema } from './EventCheckInScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInCreateWithoutEventInputObjectSchema).array(), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCheckInCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => EventCheckInCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCheckInCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventCheckInUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => EventCheckInUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventCheckInScalarWhereInputObjectSchema), z.lazy(() => EventCheckInScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventCheckInUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyWithoutEventNestedInput>;
export const EventCheckInUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
