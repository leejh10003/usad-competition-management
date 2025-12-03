import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { SchoolScalarRelationFilterObjectSchema as SchoolScalarRelationFilterObjectSchema } from './SchoolScalarRelationFilter.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { TeamCoachRelationshipListRelationFilterObjectSchema as TeamCoachRelationshipListRelationFilterObjectSchema } from './TeamCoachRelationshipListRelationFilter.schema';
import { StudentListRelationFilterObjectSchema as StudentListRelationFilterObjectSchema } from './StudentListRelationFilter.schema'

const teamwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamWhereInputObjectSchema), z.lazy(() => TeamWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamWhereInputObjectSchema), z.lazy(() => TeamWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalTeamId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  division: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  objectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  subjectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  school: z.union([z.lazy(() => SchoolScalarRelationFilterObjectSchema), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipListRelationFilterObjectSchema).optional(),
  students: z.lazy(() => StudentListRelationFilterObjectSchema).optional()
}).strict();
export const TeamWhereInputObjectSchema: z.ZodType<Prisma.TeamWhereInput> = teamwhereinputSchema as unknown as z.ZodType<Prisma.TeamWhereInput>;
export const TeamWhereInputObjectZodSchema = teamwhereinputSchema;
