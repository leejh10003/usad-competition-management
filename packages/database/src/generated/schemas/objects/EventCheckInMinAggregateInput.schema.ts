import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  checkedInAt: z.literal(true).optional()
}).strict();
export const EventCheckInMinAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInMinAggregateInputType>;
export const EventCheckInMinAggregateInputObjectZodSchema = makeSchema();
