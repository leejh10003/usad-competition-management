import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema as StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema } from './StudentUpdateOneRequiredWithoutEventCheckInsNestedInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  student: z.lazy(() => StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema).optional()
}).strict();
export const EventCheckInUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateWithoutEventInput>;
export const EventCheckInUpdateWithoutEventInputObjectZodSchema = makeSchema();
