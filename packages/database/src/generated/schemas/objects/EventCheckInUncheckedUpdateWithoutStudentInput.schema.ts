import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  eventId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkedInAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const EventCheckInUncheckedUpdateWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUncheckedUpdateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUncheckedUpdateWithoutStudentInput>;
export const EventCheckInUncheckedUpdateWithoutStudentInputObjectZodSchema = makeSchema();
