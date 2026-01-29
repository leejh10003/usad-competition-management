import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  competitionId: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional(),
  type: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EventCountAggregateInputObjectSchema: z.ZodType<Prisma.EventCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventCountAggregateInputType>;
export const EventCountAggregateInputObjectZodSchema = makeSchema();
