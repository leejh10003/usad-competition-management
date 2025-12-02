import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.literal(true).optional(),
  coachId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TeamCoachRelationshipCountAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCountAggregateInputType>;
export const TeamCoachRelationshipCountAggregateInputObjectZodSchema = makeSchema();
