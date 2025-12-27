import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const coachscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CoachScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CoachScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CoachScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CoachScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CoachScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  externalCoachId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  firstName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  mutationIndex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  schoolId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CoachScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CoachScalarWhereWithAggregatesInput> = coachscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CoachScalarWhereWithAggregatesInput>;
export const CoachScalarWhereWithAggregatesInputObjectZodSchema = coachscalarwherewithaggregatesinputSchema;
