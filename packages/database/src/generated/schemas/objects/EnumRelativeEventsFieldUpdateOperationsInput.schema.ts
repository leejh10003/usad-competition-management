import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema'

const makeSchema = () => z.object({
  set: RelativeEventsSchema.optional()
}).strict();
export const EnumRelativeEventsFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRelativeEventsFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRelativeEventsFieldUpdateOperationsInput>;
export const EnumRelativeEventsFieldUpdateOperationsInputObjectZodSchema = makeSchema();
