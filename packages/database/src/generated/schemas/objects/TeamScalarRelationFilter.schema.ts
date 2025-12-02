import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TeamWhereInputObjectSchema).optional()
}).strict();
export const TeamScalarRelationFilterObjectSchema: z.ZodType<Prisma.TeamScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TeamScalarRelationFilter>;
export const TeamScalarRelationFilterObjectZodSchema = makeSchema();
