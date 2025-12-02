import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CoachWhereInputObjectSchema).optional(),
  some: z.lazy(() => CoachWhereInputObjectSchema).optional(),
  none: z.lazy(() => CoachWhereInputObjectSchema).optional()
}).strict();
export const CoachListRelationFilterObjectSchema: z.ZodType<Prisma.CoachListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CoachListRelationFilter>;
export const CoachListRelationFilterObjectZodSchema = makeSchema();
