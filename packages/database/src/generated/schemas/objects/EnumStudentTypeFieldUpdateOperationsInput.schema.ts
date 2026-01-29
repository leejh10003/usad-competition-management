import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentTypeSchema } from '../enums/StudentType.schema'

const makeSchema = () => z.object({
  set: StudentTypeSchema.optional()
}).strict();
export const EnumStudentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStudentTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStudentTypeFieldUpdateOperationsInput>;
export const EnumStudentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
