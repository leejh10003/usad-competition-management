import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.string(),
  coachId: z.string()
}).strict();
export const TeamCoachRelationshipUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateInput>;
export const TeamCoachRelationshipUncheckedCreateInputObjectZodSchema = makeSchema();
