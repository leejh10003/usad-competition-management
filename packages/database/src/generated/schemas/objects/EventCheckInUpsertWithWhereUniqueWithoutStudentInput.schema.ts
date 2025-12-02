import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithoutStudentInputObjectSchema as EventCheckInUpdateWithoutStudentInputObjectSchema } from './EventCheckInUpdateWithoutStudentInput.schema';
import { EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema as EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedUpdateWithoutStudentInput.schema';
import { EventCheckInCreateWithoutStudentInputObjectSchema as EventCheckInCreateWithoutStudentInputObjectSchema } from './EventCheckInCreateWithoutStudentInput.schema';
import { EventCheckInUncheckedCreateWithoutStudentInputObjectSchema as EventCheckInUncheckedCreateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventCheckInUpdateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCheckInCreateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUpsertWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpsertWithWhereUniqueWithoutStudentInput>;
export const EventCheckInUpsertWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
