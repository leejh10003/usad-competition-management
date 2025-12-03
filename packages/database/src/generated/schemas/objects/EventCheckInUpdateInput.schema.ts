import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema as StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema } from './StudentUpdateOneRequiredWithoutEventCheckInsNestedInput.schema';
import { EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema as EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutEventCheckInNestedInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  student: z.lazy(() => StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutEventCheckInNestedInputObjectSchema).optional()
}).strict();
export const EventCheckInUpdateInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateInput>;
export const EventCheckInUpdateInputObjectZodSchema = makeSchema();
