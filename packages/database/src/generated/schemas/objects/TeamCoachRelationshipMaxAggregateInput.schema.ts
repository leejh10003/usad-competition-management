import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.literal(true).optional(),
  coachId: z.literal(true).optional()
}).strict();
export const TeamCoachRelationshipMaxAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipMaxAggregateInputType>;
export const TeamCoachRelationshipMaxAggregateInputObjectZodSchema = makeSchema();
