import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  externalTeamId: z.literal(true).optional(),
  schoolId: z.literal(true).optional(),
  division: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional()
}).strict();
export const TeamMaxAggregateInputObjectSchema: z.ZodType<Prisma.TeamMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamMaxAggregateInputType>;
export const TeamMaxAggregateInputObjectZodSchema = makeSchema();
