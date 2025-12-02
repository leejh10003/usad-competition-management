import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCountOutputTypeSelectObjectSchema as CompetitionCountOutputTypeSelectObjectSchema } from './CompetitionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompetitionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CompetitionCountOutputTypeArgsObjectSchema = makeSchema();
export const CompetitionCountOutputTypeArgsObjectZodSchema = makeSchema();
