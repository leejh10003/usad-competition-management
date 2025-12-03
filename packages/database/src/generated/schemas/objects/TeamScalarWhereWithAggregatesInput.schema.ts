import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const teamscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  externalTeamId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  schoolId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  division: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  objectiveScore: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  subjectiveScore: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TeamScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = teamscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput>;
export const TeamScalarWhereWithAggregatesInputObjectZodSchema = teamscalarwherewithaggregatesinputSchema;
