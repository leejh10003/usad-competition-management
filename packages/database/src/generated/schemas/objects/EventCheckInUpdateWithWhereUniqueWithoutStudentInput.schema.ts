import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './EventCheckInWhereUniqueInput.schema';
import { EventCheckInUpdateWithoutStudentInputObjectSchema as EventCheckInUpdateWithoutStudentInputObjectSchema } from './EventCheckInUpdateWithoutStudentInput.schema';
import { EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema as EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema } from './EventCheckInUncheckedUpdateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventCheckInWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventCheckInUpdateWithoutStudentInputObjectSchema), z.lazy(() => EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema)])
}).strict();
export const EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateWithWhereUniqueWithoutStudentInput>;
export const EventCheckInUpdateWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
