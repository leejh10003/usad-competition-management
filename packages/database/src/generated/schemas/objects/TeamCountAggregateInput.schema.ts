import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  externalTeamId: z.literal(true).optional(),
  schoolId: z.literal(true).optional(),
  division: z.literal(true).optional(),
  objectiveScore: z.literal(true).optional(),
  subjectiveScore: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TeamCountAggregateInputObjectSchema: z.ZodType<Prisma.TeamCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamCountAggregateInputType>;
export const TeamCountAggregateInputObjectZodSchema = makeSchema();
