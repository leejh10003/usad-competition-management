import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateWithoutStudentInputObjectSchema as EventCheckInCreateWithoutStudentInputObjectSchema } from './EventCheckInCreateWithoutStudentInput.schema';
import { EventCheckInUncheckedCreateWithoutStudentInputObjectSchema as EventCheckInUncheckedCreateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedCreateWithoutStudentInput.schema';
import { EventCheckInCreateOrConnectWithoutStudentInputObjectSchema as EventCheckInCreateOrConnectWithoutStudentInputObjectSchema } from './EventCheckInCreateOrConnectWithoutStudentInput.schema';
import { EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectSchema as EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectSchema } from './EventCheckInUpsertWithWhereUniqueWithoutStudentInput.schema';
import { EventCheckInCreateManyStudentInputEnvelopeObjectSchema as EventCheckInCreateManyStudentInputEnvelopeObjectSchema } from './EventCheckInCreateManyStudentInputEnvelope.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectSchema as EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectSchema } from './EventCheckInUpdateWithWhereUniqueWithoutStudentInput.schema';
import { EventCheckInUpdateManyWithWhereWithoutStudentInputObjectSchema as EventCheckInUpdateManyWithWhereWithoutStudentInputObjectSchema } from './EventCheckInUpdateManyWithWhereWithoutStudentInput.schema';
import { EventCheckInScalarWhereInputObjectSchema as EventCheckInScalarWhereInputObjectSchema } from './EventCheckInScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCheckInCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCheckInCreateManyStudentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventCheckInUpdateManyWithWhereWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUpdateManyWithWhereWithoutStudentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventCheckInScalarWhereInputObjectSchema), z.lazy(() => EventCheckInScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventCheckInUpdateManyWithoutStudentNestedInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateManyWithoutStudentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyWithoutStudentNestedInput>;
export const EventCheckInUpdateManyWithoutStudentNestedInputObjectZodSchema = makeSchema();
