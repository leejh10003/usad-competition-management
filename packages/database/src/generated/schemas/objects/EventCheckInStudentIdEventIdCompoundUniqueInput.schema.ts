import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.string(),
  eventId: z.string()
}).strict();
export const EventCheckInStudentIdEventIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.EventCheckInStudentIdEventIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInStudentIdEventIdCompoundUniqueInput>;
export const EventCheckInStudentIdEventIdCompoundUniqueInputObjectZodSchema = makeSchema();
