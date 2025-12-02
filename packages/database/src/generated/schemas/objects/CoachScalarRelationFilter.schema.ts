import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CoachWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CoachWhereInputObjectSchema).optional()
}).strict();
export const CoachScalarRelationFilterObjectSchema: z.ZodType<Prisma.CoachScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CoachScalarRelationFilter>;
export const CoachScalarRelationFilterObjectZodSchema = makeSchema();
