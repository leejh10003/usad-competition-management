import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CompetitionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CompetitionWhereInputObjectSchema).optional()
}).strict();
export const CompetitionScalarRelationFilterObjectSchema: z.ZodType<Prisma.CompetitionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionScalarRelationFilter>;
export const CompetitionScalarRelationFilterObjectZodSchema = makeSchema();
