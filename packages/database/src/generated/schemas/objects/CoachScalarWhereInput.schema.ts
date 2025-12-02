import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const coachscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CoachScalarWhereInputObjectSchema), z.lazy(() => CoachScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CoachScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CoachScalarWhereInputObjectSchema), z.lazy(() => CoachScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalCoachId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  objectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  subjectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional()
}).strict();
export const CoachScalarWhereInputObjectSchema: z.ZodType<Prisma.CoachScalarWhereInput> = coachscalarwhereinputSchema as unknown as z.ZodType<Prisma.CoachScalarWhereInput>;
export const CoachScalarWhereInputObjectZodSchema = coachscalarwhereinputSchema;
