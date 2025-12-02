import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  checkedInAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EventCheckInCountAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInCountAggregateInputType>;
export const EventCheckInCountAggregateInputObjectZodSchema = makeSchema();
