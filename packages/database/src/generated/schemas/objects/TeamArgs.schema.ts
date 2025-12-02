import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './TeamSelect.schema';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './TeamInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TeamSelectObjectSchema).optional(),
  include: z.lazy(() => TeamIncludeObjectSchema).optional()
}).strict();
export const TeamArgsObjectSchema = makeSchema();
export const TeamArgsObjectZodSchema = makeSchema();
