import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventCheckInUpdateManyWithoutEventNestedInputObjectSchema as EventCheckInUpdateManyWithoutEventNestedInputObjectSchema } from './EventCheckInUpdateManyWithoutEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  eventCheckIn: z.lazy(() => EventCheckInUpdateManyWithoutEventNestedInputObjectSchema).optional()
}).strict();
export const EventUpdateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUpdateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithoutCompetitionInput>;
export const EventUpdateWithoutCompetitionInputObjectZodSchema = makeSchema();
