import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CompetitionUpdateOneRequiredWithoutEventsNestedInputObjectSchema as CompetitionUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './CompetitionUpdateOneRequiredWithoutEventsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  competition: z.lazy(() => CompetitionUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional()
}).strict();
export const EventUpdateWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventUpdateWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithoutEventCheckInInput>;
export const EventUpdateWithoutEventCheckInInputObjectZodSchema = makeSchema();
