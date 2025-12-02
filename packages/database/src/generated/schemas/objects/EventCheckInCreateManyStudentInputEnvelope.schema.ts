import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateManyStudentInputObjectSchema as EventCheckInCreateManyStudentInputObjectSchema } from './EventCheckInCreateManyStudentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCheckInCreateManyStudentInputObjectSchema), z.lazy(() => EventCheckInCreateManyStudentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCheckInCreateManyStudentInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCheckInCreateManyStudentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateManyStudentInputEnvelope>;
export const EventCheckInCreateManyStudentInputEnvelopeObjectZodSchema = makeSchema();
