import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './CoachInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CoachSelectObjectSchema).optional(),
  include: z.lazy(() => CoachIncludeObjectSchema).optional()
}).strict();
export const CoachArgsObjectSchema = makeSchema();
export const CoachArgsObjectZodSchema = makeSchema();
