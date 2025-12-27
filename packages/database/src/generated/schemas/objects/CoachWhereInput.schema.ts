import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { SchoolScalarRelationFilterObjectSchema as SchoolScalarRelationFilterObjectSchema } from './SchoolScalarRelationFilter.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolNullableScalarRelationFilterObjectSchema as SchoolNullableScalarRelationFilterObjectSchema } from './SchoolNullableScalarRelationFilter.schema';
import { TeamCoachRelationshipListRelationFilterObjectSchema as TeamCoachRelationshipListRelationFilterObjectSchema } from './TeamCoachRelationshipListRelationFilter.schema'

const coachwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CoachWhereInputObjectSchema), z.lazy(() => CoachWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CoachWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CoachWhereInputObjectSchema), z.lazy(() => CoachWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalCoachId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  schoolId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  school: z.union([z.lazy(() => SchoolScalarRelationFilterObjectSchema), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  primarySchool: z.union([z.lazy(() => SchoolNullableScalarRelationFilterObjectSchema), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipListRelationFilterObjectSchema).optional()
}).strict();
export const CoachWhereInputObjectSchema: z.ZodType<Prisma.CoachWhereInput> = coachwhereinputSchema as unknown as z.ZodType<Prisma.CoachWhereInput>;
export const CoachWhereInputObjectZodSchema = coachwhereinputSchema;
