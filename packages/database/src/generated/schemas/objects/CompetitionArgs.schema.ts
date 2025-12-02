import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './CompetitionSelect.schema';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './CompetitionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompetitionSelectObjectSchema).optional(),
  include: z.lazy(() => CompetitionIncludeObjectSchema).optional()
}).strict();
export const CompetitionArgsObjectSchema = makeSchema();
export const CompetitionArgsObjectZodSchema = makeSchema();
