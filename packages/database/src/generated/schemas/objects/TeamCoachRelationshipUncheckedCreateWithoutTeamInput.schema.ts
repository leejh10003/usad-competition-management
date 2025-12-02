import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  coachId: z.string()
}).strict();
export const TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateWithoutTeamInput>;
export const TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectZodSchema = makeSchema();
