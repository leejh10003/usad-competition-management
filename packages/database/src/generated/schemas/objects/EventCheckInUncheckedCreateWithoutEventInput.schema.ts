import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable()
}).strict();
export const EventCheckInUncheckedCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedCreateWithoutEventInput>;
export const EventCheckInUncheckedCreateWithoutEventInputObjectZodSchema = makeSchema();
