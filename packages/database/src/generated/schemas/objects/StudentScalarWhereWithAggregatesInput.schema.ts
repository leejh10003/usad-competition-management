import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumDivisionWithAggregatesFilterObjectSchema as EnumDivisionWithAggregatesFilterObjectSchema } from './EnumDivisionWithAggregatesFilter.schema';
import { DivisionSchema } from '../enums/Division.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumStateNullableWithAggregatesFilterObjectSchema as EnumStateNullableWithAggregatesFilterObjectSchema } from './EnumStateNullableWithAggregatesFilter.schema';
import { StateSchema } from '../enums/State.schema';
import { UuidNullableWithAggregatesFilterObjectSchema as UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema'

const studentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  externalStudentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  division: z.union([z.lazy(() => EnumDivisionWithAggregatesFilterObjectSchema), DivisionSchema]).optional(),
  gpa: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  usadPin: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  attachmentOnRegistering: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  streetAddress: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => EnumStateNullableWithAggregatesFilterObjectSchema), StateSchema]).optional().nullable(),
  zipCode: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  guardianFirstName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  guardianLastName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  guardianPhone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  guardianEmail: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  teamId: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  competitionId: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const StudentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput> = studentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput>;
export const StudentScalarWhereWithAggregatesInputObjectZodSchema = studentscalarwherewithaggregatesinputSchema;
