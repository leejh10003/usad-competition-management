import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentTypeSchema } from '../enums/StudentType.schema'

const nestedenumstudenttypefilterSchema = z.object({
  equals: StudentTypeSchema.optional(),
  in: StudentTypeSchema.array().optional(),
  notIn: StudentTypeSchema.array().optional(),
  not: z.union([StudentTypeSchema, z.lazy(() => NestedEnumStudentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStudentTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumStudentTypeFilter> = nestedenumstudenttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumStudentTypeFilter>;
export const NestedEnumStudentTypeFilterObjectZodSchema = nestedenumstudenttypefilterSchema;
