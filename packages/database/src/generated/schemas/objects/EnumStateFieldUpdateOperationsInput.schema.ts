import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  set: StateSchema.optional()
}).strict();
export const EnumStateFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStateFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStateFieldUpdateOperationsInput>;
export const EnumStateFieldUpdateOperationsInputObjectZodSchema = makeSchema();
