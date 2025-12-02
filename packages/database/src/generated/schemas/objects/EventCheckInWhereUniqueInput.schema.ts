import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInStudentIdEventIdCompoundUniqueInputObjectSchema as EventCheckInStudentIdEventIdCompoundUniqueInputObjectSchema } from './EventCheckInStudentIdEventIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  studentId_eventId: z.lazy(() => EventCheckInStudentIdEventIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const EventCheckInWhereUniqueInputObjectSchema: z.ZodType<Prisma.EventCheckInWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInWhereUniqueInput>;
export const EventCheckInWhereUniqueInputObjectZodSchema = makeSchema();
