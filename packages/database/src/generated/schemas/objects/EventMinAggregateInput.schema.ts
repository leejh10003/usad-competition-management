import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  competitionId: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const EventMinAggregateInputObjectSchema: z.ZodType<Prisma.EventMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventMinAggregateInputType>;
export const EventMinAggregateInputObjectZodSchema = makeSchema();
