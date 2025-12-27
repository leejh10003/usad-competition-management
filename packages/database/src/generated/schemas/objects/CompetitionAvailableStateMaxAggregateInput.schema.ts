import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  competitionId: z.literal(true).optional(),
  state: z.literal(true).optional()
}).strict();
export const CompetitionAvailableStateMaxAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateMaxAggregateInputType>;
export const CompetitionAvailableStateMaxAggregateInputObjectZodSchema = makeSchema();
