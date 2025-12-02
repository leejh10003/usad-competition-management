import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumStateNullableWithAggregatesFilterObjectSchema as EnumStateNullableWithAggregatesFilterObjectSchema } from './EnumStateNullableWithAggregatesFilter.schema';
import { StateSchema } from '../enums/State.schema'

const competitionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CompetitionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompetitionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompetitionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompetitionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompetitionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  startsAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endsAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  state: z.union([z.lazy(() => EnumStateNullableWithAggregatesFilterObjectSchema), StateSchema]).optional().nullable()
}).strict();
export const CompetitionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CompetitionScalarWhereWithAggregatesInput> = competitionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CompetitionScalarWhereWithAggregatesInput>;
export const CompetitionScalarWhereWithAggregatesInputObjectZodSchema = competitionscalarwherewithaggregatesinputSchema;
