import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema as EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutEventCheckInNestedInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema).optional()
}).strict();
export const EventCheckInUpdateWithoutStudentInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateWithoutStudentInput>;
export const EventCheckInUpdateWithoutStudentInputObjectZodSchema = makeSchema();
