import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './EventCheckInInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EventCheckInSelectObjectSchema).optional(),
  include: z.lazy(() => EventCheckInIncludeObjectSchema).optional()
}).strict();
export const EventCheckInArgsObjectSchema = makeSchema();
export const EventCheckInArgsObjectZodSchema = makeSchema();
