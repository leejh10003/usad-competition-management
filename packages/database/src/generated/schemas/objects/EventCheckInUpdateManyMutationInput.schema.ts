import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  checkedInAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const EventCheckInUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.EventCheckInUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyMutationInput>;
export const EventCheckInUpdateManyMutationInputObjectZodSchema = makeSchema();
