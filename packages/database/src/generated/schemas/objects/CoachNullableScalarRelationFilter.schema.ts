import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CoachWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CoachWhereInputObjectSchema).optional().nullable()
}).strict();
export const CoachNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CoachNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CoachNullableScalarRelationFilter>;
export const CoachNullableScalarRelationFilterObjectZodSchema = makeSchema();
