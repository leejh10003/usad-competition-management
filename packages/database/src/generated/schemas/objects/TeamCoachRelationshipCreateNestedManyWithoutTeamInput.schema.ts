import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateOrConnectWithoutTeamInput.schema';
import { TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema as TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema } from './TeamCoachRelationshipCreateManyTeamInputEnvelope.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateNestedManyWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateNestedManyWithoutTeamInput>;
export const TeamCoachRelationshipCreateNestedManyWithoutTeamInputObjectZodSchema = makeSchema();
