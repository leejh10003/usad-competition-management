import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.string(),
  eventId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable()
}).strict();
export const EventCheckInCreateManyInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateManyInput>;
export const EventCheckInCreateManyInputObjectZodSchema = makeSchema();
