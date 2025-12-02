import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.string(),
  checkedInAt: z.coerce.date().optional().nullable()
}).strict();
export const EventCheckInCreateManyEventInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateManyEventInput>;
export const EventCheckInCreateManyEventInputObjectZodSchema = makeSchema();
