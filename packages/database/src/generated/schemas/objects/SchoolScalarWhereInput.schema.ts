import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumStateNullableFilterObjectSchema as EnumStateNullableFilterObjectSchema } from './EnumStateNullableFilter.schema';
import { StateSchema } from '../enums/State.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const schoolscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SchoolScalarWhereInputObjectSchema), z.lazy(() => SchoolScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SchoolScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SchoolScalarWhereInputObjectSchema), z.lazy(() => SchoolScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalSchoolId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isVirtual: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  streetAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  state: z.union([z.lazy(() => EnumStateNullableFilterObjectSchema), StateSchema]).optional().nullable(),
  zipCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  principalName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  principalEmail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  objectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  subjectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  primaryCoachId: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emailDomain: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  division: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  competitionId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SchoolScalarWhereInputObjectSchema: z.ZodType<Prisma.SchoolScalarWhereInput> = schoolscalarwhereinputSchema as unknown as z.ZodType<Prisma.SchoolScalarWhereInput>;
export const SchoolScalarWhereInputObjectZodSchema = schoolscalarwhereinputSchema;
