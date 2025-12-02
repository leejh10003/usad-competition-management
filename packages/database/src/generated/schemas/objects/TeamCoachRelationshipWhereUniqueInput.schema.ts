import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInputObjectSchema as TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInputObjectSchema } from './TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  teamId_coachId: z.lazy(() => TeamCoachRelationshipTeamIdCoachIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipWhereUniqueInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipWhereUniqueInput>;
export const TeamCoachRelationshipWhereUniqueInputObjectZodSchema = makeSchema();
