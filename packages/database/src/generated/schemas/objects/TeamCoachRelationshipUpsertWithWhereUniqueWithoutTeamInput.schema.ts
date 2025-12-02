import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema as TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUpdateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateWithoutTeamInput.schema';
import { TeamCoachRelationshipCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema)]),
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInput>;
export const TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectZodSchema = makeSchema();
