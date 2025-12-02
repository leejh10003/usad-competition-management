import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutTeamInput.schema';
import { TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema as TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema } from './TeamCoachRelationshipCreateOrConnectWithoutTeamInput.schema';
import { TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectSchema as TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInput.schema';
import { TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema as TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema } from './TeamCoachRelationshipCreateManyTeamInputEnvelope.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectSchema as TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInput.schema';
import { TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectSchema as TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInput.schema';
import { TeamCoachRelationshipScalarWhereInputObjectSchema as TeamCoachRelationshipScalarWhereInputObjectSchema } from './TeamCoachRelationshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpsertWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCoachRelationshipCreateManyTeamInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpdateWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TeamCoachRelationshipUncheckedUpdateManyWithoutTeamNestedInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyWithoutTeamNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyWithoutTeamNestedInput>;
export const TeamCoachRelationshipUncheckedUpdateManyWithoutTeamNestedInputObjectZodSchema = makeSchema();
