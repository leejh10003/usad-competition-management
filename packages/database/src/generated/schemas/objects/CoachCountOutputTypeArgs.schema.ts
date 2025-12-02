import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCountOutputTypeSelectObjectSchema as CoachCountOutputTypeSelectObjectSchema } from './CoachCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CoachCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const CoachCountOutputTypeArgsObjectSchema = makeSchema();
export const CoachCountOutputTypeArgsObjectZodSchema = makeSchema();
