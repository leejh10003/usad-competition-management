import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  eventId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable()
}).strict();
export const EventCheckInUncheckedCreateWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedCreateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedCreateWithoutStudentInput>;
export const EventCheckInUncheckedCreateWithoutStudentInputObjectZodSchema = makeSchema();
