import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema'

const makeSchema = () => z.object({
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional()
}).strict();
export const EventCheckInIncludeObjectSchema: z.ZodType<Prisma.EventCheckInInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInInclude>;
export const EventCheckInIncludeObjectZodSchema = makeSchema();
