import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentTypeSchema } from '../enums/StudentType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStudentTypeFilterObjectSchema as NestedEnumStudentTypeFilterObjectSchema } from './NestedEnumStudentTypeFilter.schema'

const nestedenumstudenttypewithaggregatesfilterSchema = z.object({
  equals: StudentTypeSchema.optional(),
  in: StudentTypeSchema.array().optional(),
  notIn: StudentTypeSchema.array().optional(),
  not: z.union([StudentTypeSchema, z.lazy(() => NestedEnumStudentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStudentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStudentTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumStudentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStudentTypeWithAggregatesFilter> = nestedenumstudenttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStudentTypeWithAggregatesFilter>;
export const NestedEnumStudentTypeWithAggregatesFilterObjectZodSchema = nestedenumstudenttypewithaggregatesfilterSchema;
