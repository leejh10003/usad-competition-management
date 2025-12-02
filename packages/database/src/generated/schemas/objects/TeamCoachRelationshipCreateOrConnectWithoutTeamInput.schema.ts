import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateOrConnectWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateOrConnectWithoutTeamInput>;
export const TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectZodSchema = makeSchema();
