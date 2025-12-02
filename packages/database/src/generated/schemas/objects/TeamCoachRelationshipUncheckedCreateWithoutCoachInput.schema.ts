import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  teamId: z.string()
}).strict();
export const TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedCreateWithoutCoachInput>;
export const TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectZodSchema = makeSchema();
