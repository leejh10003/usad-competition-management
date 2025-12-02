import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema'

const makeSchema = () => z.object({
  set: DivisionSchema.optional()
}).strict();
export const EnumDivisionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDivisionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDivisionFieldUpdateOperationsInput>;
export const EnumDivisionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
