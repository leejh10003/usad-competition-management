import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  startsAt: z.literal(true).optional(),
  endsAt: z.literal(true).optional(),
  state: z.literal(true).optional()
}).strict();
export const CompetitionMaxAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionMaxAggregateInputType>;
export const CompetitionMaxAggregateInputObjectZodSchema = makeSchema();
