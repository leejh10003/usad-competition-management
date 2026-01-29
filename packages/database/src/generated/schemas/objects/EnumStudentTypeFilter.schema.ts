import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentTypeSchema } from '../enums/StudentType.schema';
import { NestedEnumStudentTypeFilterObjectSchema as NestedEnumStudentTypeFilterObjectSchema } from './NestedEnumStudentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: StudentTypeSchema.optional(),
  in: StudentTypeSchema.array().optional(),
  notIn: StudentTypeSchema.array().optional(),
  not: z.union([StudentTypeSchema, z.lazy(() => NestedEnumStudentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumStudentTypeFilterObjectSchema: z.ZodType<Prisma.EnumStudentTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStudentTypeFilter>;
export const EnumStudentTypeFilterObjectZodSchema = makeSchema();
