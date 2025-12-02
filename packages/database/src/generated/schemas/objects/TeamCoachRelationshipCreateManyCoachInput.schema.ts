import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.string()
}).strict();
export const TeamCoachRelationshipCreateManyCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyCoachInput>;
export const TeamCoachRelationshipCreateManyCoachInputObjectZodSchema = makeSchema();
