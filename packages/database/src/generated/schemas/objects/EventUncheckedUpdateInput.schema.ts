import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema as EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './EventCheckInUncheckedUpdateManyWithoutEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  startsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  competitionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  eventCheckIn: z.lazy(() => EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema).optional()
}).strict();
export const EventUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateInput>;
export const EventUncheckedUpdateInputObjectZodSchema = makeSchema();
