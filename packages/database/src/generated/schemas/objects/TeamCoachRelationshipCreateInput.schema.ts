import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema as TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema } from './TeamCreateNestedOneWithoutCoachesRelationshipInput.schema';
import { CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema as CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema } from './CoachCreateNestedOneWithoutTeamRelationshipInput.schema'

const makeSchema = () => z.object({
  team: z.lazy(() => TeamCreateNestedOneWithoutCoachesRelationshipInputObjectSchema),
  coach: z.lazy(() => CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema)
}).strict();
export const TeamCoachRelationshipCreateInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateInput>;
export const TeamCoachRelationshipCreateInputObjectZodSchema = makeSchema();
