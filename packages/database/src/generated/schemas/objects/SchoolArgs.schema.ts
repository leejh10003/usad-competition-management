import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './SchoolInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SchoolSelectObjectSchema).optional(),
  include: z.lazy(() => SchoolIncludeObjectSchema).optional()
}).strict();
export const SchoolArgsObjectSchema = makeSchema();
export const SchoolArgsObjectZodSchema = makeSchema();
