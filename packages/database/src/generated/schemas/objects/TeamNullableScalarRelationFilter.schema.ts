import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TeamWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TeamWhereInputObjectSchema).optional().nullable()
}).strict();
export const TeamNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TeamNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TeamNullableScalarRelationFilter>;
export const TeamNullableScalarRelationFilterObjectZodSchema = makeSchema();
