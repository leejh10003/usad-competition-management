import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  coachId: z.string()
}).strict();
export const TeamCoachRelationshipCreateManyTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyTeamInput>;
export const TeamCoachRelationshipCreateManyTeamInputObjectZodSchema = makeSchema();
