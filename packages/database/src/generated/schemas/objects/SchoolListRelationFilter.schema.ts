import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  some: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  none: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolListRelationFilterObjectSchema: z.ZodType<Prisma.SchoolListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SchoolListRelationFilter>;
export const SchoolListRelationFilterObjectZodSchema = makeSchema();
