import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.string(),
  coachId: z.string()
}).strict();
export const TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInput>;
export const TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInputObjectZodSchema = makeSchema();
