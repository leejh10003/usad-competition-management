import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema as TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUpdateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInput>;
export const TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectZodSchema = makeSchema();
