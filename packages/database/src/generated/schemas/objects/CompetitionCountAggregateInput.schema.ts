import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  startsAt: z.literal(true).optional(),
  endsAt: z.literal(true).optional(),
  state: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CompetitionCountAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCountAggregateInputType>;
export const CompetitionCountAggregateInputObjectZodSchema = makeSchema();
