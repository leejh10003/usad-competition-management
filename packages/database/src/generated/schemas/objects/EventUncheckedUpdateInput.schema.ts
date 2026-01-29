import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { EnumRelativeEventsFieldUpdateOperationsInputObjectSchema as EnumRelativeEventsFieldUpdateOperationsInputObjectSchema } from './EnumRelativeEventsFieldUpdateOperationsInput.schema';
import { EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema as EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema } from './EventCheckInUncheckedUpdateManyWithoutEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  competitionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([RelativeEventsSchema, z.lazy(() => EnumRelativeEventsFieldUpdateOperationsInputObjectSchema)]).optional(),
  eventCheckIn: z.lazy(() => EventCheckInUncheckedUpdateManyWithoutEventNestedInputObjectSchema).optional()
}).strict();
export const EventUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateInput>;
export const EventUncheckedUpdateInputObjectZodSchema = makeSchema();
