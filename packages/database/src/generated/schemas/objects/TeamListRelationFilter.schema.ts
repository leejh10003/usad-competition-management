import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  some: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  none: z.lazy(() => TeamWhereInputObjectSchema).optional()
}).strict();
export const TeamListRelationFilterObjectSchema: z.ZodType<Prisma.TeamListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TeamListRelationFilter>;
export const TeamListRelationFilterObjectZodSchema = makeSchema();
