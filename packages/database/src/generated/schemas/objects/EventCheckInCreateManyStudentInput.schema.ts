import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  eventId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable(),
  mutationIndex: z.number().int()
}).strict();
export const EventCheckInCreateManyStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateManyStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateManyStudentInput>;
export const EventCheckInCreateManyStudentInputObjectZodSchema = makeSchema();
