import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional()
}).strict();
export const EventCheckInAvgAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInAvgAggregateInputType>;
export const EventCheckInAvgAggregateInputObjectZodSchema = makeSchema();
