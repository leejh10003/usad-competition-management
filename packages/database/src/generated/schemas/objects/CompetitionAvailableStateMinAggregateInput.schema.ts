import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  competitionId: z.literal(true).optional(),
  state: z.literal(true).optional()
}).strict();
export const CompetitionAvailableStateMinAggregateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateMinAggregateInputType>;
export const CompetitionAvailableStateMinAggregateInputObjectZodSchema = makeSchema();
