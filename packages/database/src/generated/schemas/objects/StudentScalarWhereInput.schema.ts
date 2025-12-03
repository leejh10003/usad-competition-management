import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumDivisionFilterObjectSchema as EnumDivisionFilterObjectSchema } from './EnumDivisionFilter.schema';
import { DivisionSchema } from '../enums/Division.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumStateNullableFilterObjectSchema as EnumStateNullableFilterObjectSchema } from './EnumStateNullableFilter.schema';
import { StateSchema } from '../enums/State.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema'

const studentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalStudentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  division: z.union([z.lazy(() => EnumDivisionFilterObjectSchema), DivisionSchema]).optional(),
  gpa: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  usadPin: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  attachmentOnRegistering: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  streetAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => EnumStateNullableFilterObjectSchema), StateSchema]).optional().nullable(),
  zipCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guardianFirstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guardianLastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guardianPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  guardianEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  teamId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  competitionId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const StudentScalarWhereInputObjectSchema: z.ZodType<Prisma.StudentScalarWhereInput> = studentscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudentScalarWhereInput>;
export const StudentScalarWhereInputObjectZodSchema = studentscalarwhereinputSchema;
