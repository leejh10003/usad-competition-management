import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCountOutputTypeSelectObjectSchema as SchoolCountOutputTypeSelectObjectSchema } from './SchoolCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SchoolCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SchoolCountOutputTypeArgsObjectSchema = makeSchema();
export const SchoolCountOutputTypeArgsObjectZodSchema = makeSchema();
