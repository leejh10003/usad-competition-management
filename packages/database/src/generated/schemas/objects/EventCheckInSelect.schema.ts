import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema'

const makeSchema = () => z.object({
  studentId: z.boolean().optional(),
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional(),
  eventId: z.boolean().optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  checkedInAt: z.boolean().optional(),
  mutationIndex: z.boolean().optional()
}).strict();
export const EventCheckInSelectObjectSchema: z.ZodType<Prisma.EventCheckInSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInSelect>;
export const EventCheckInSelectObjectZodSchema = makeSchema();
