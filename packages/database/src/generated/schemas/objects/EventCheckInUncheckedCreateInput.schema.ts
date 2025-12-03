import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.string(),
  eventId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable(),
  mutationIndex: z.number().int()
}).strict();
export const EventCheckInUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedCreateInput>;
export const EventCheckInUncheckedCreateInputObjectZodSchema = makeSchema();
