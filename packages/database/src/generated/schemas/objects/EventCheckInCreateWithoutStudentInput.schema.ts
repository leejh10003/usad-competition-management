import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateNestedOneWithoutEventCheckInInputObjectSchema as EventCreateNestedOneWithoutEventCheckInInputObjectSchema } from './EventCreateNestedOneWithoutEventCheckInInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.coerce.date().optional().nullable(),
  mutationIndex: z.number().int(),
  event: z.lazy(() => EventCreateNestedOneWithoutEventCheckInInputObjectSchema)
}).strict();
export const EventCheckInCreateWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInCreateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCreateWithoutStudentInput>;
export const EventCheckInCreateWithoutStudentInputObjectZodSchema = makeSchema();
