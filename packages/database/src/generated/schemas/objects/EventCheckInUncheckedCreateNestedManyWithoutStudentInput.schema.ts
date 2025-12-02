import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateWithoutStudentInputObjectSchema as EventCheckInCreateWithoutStudentInputObjectSchema } from './EventCheckInCreateWithoutStudentInput.schema';
import { EventCheckInUncheckedCreateWithoutStudentInputObjectSchema as EventCheckInUncheckedCreateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedCreateWithoutStudentInput.schema';
import { EventCheckInCreateOrConnectWithoutStudentInputObjectSchema as EventCheckInCreateOrConnectWithoutStudentInputObjectSchema } from './EventCheckInCreateOrConnectWithoutStudentInput.schema';
import { EventCheckInCreateManyStudentInputEnvelopeObjectSchema as EventCheckInCreateManyStudentInputEnvelopeObjectSchema } from './EventCheckInCreateManyStudentInputEnvelope.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCheckInCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCheckInCreateManyStudentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventCheckInWhereUniqueInputObjectSchema), z.lazy(() => EventCheckInWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventCheckInUncheckedCreateNestedManyWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedCreateNestedManyWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedCreateNestedManyWithoutStudentInput>;
export const EventCheckInUncheckedCreateNestedManyWithoutStudentInputObjectZodSchema = makeSchema();
