import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  mutationIndex: z.literal(true).optional()
}).strict();
export const EventCheckInSumAggregateInputObjectSchema: z.ZodType<Prisma.EventCheckInSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInSumAggregateInputType>;
export const EventCheckInSumAggregateInputObjectZodSchema = makeSchema();
