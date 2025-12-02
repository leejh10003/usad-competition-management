import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.literal(true).optional(),
  coachId: z.literal(true).optional()
}).strict();
export const TeamCoachRelationshipMinAggregateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipMinAggregateInputType>;
export const TeamCoachRelationshipMinAggregateInputObjectZodSchema = makeSchema();
