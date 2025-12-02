import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const teamscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamScalarWhereInputObjectSchema), z.lazy(() => TeamScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamScalarWhereInputObjectSchema), z.lazy(() => TeamScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  externalTeamId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  division: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  objectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  subjectiveScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const TeamScalarWhereInputObjectSchema: z.ZodType<Prisma.TeamScalarWhereInput> = teamscalarwhereinputSchema as unknown as z.ZodType<Prisma.TeamScalarWhereInput>;
export const TeamScalarWhereInputObjectZodSchema = teamscalarwhereinputSchema;
