import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolScalarRelationFilterObjectSchema: z.ZodType<Prisma.SchoolScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SchoolScalarRelationFilter>;
export const SchoolScalarRelationFilterObjectZodSchema = makeSchema();
