import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInCreateWithoutStudentInputObjectSchema as EventCheckInCreateWithoutStudentInputObjectSchema } from './EventCheckInCreateWithoutStudentInput.schema';
import { EventCheckInUncheckedCreateWithoutStudentInputObjectSchema as EventCheckInUncheckedCreateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const EventCheckInCreateOrConnectWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateOrConnectWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateOrConnectWithoutStudentInput>;
export const EventCheckInCreateOrConnectWithoutStudentInputObjectZodSchema = makeSchema();
