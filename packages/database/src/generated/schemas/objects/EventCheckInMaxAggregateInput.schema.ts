import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  studentId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  checkedInAt: z.literal(true).optional()
}).strict();
export const EventCheckInMaxAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInMaxAggregateInputType>;
export const EventCheckInMaxAggregateInputObjectZodSchema = makeSchema();
