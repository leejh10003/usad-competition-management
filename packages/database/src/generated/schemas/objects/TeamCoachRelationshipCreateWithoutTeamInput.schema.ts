import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema as CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema } from './CoachCreateNestedOneWithoutTeamRelationshipInput.schema'

const makeSchema = () => z.object({
  coach: z.lazy(() => CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema)
}).strict();
export const TeamCoachRelationshipCreateWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateWithoutTeamInput>;
export const TeamCoachRelationshipCreateWithoutTeamInputObjectZodSchema = makeSchema();
