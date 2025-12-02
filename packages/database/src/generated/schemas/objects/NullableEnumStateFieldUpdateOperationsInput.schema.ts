import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  set: StateSchema.optional()
}).strict();
export const NullableEnumStateFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumStateFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumStateFieldUpdateOperationsInput>;
export const NullableEnumStateFieldUpdateOperationsInputObjectZodSchema = makeSchema();
