import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCountOutputTypeSelectObjectSchema as TeamCountOutputTypeSelectObjectSchema } from './TeamCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TeamCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TeamCountOutputTypeArgsObjectSchema = makeSchema();
export const TeamCountOutputTypeArgsObjectZodSchema = makeSchema();
