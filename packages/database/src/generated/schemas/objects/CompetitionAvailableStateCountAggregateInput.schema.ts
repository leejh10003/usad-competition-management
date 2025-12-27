import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  competitionId: z.literal(true).optional(),
  state: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CompetitionAvailableStateCountAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCountAggregateInputType>;
export const CompetitionAvailableStateCountAggregateInputObjectZodSchema = makeSchema();
