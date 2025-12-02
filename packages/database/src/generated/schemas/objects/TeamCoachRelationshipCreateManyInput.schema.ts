import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.string(),
  coachId: z.string()
}).strict();
export const TeamCoachRelationshipCreateManyInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyInput>;
export const TeamCoachRelationshipCreateManyInputObjectZodSchema = makeSchema();
