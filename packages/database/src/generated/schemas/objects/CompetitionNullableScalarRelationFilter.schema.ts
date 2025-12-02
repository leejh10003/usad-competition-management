import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CompetitionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CompetitionWhereInputObjectSchema).optional().nullable()
}).strict();
export const CompetitionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CompetitionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionNullableScalarRelationFilter>;
export const CompetitionNullableScalarRelationFilterObjectZodSchema = makeSchema();
