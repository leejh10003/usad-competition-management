import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SchoolWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SchoolWhereInputObjectSchema).optional().nullable()
}).strict();
export const SchoolNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SchoolNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SchoolNullableScalarRelationFilter>;
export const SchoolNullableScalarRelationFilterObjectZodSchema = makeSchema();
