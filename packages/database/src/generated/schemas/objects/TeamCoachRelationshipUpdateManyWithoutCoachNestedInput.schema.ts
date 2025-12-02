import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateOrConnectWithoutCoachInput.schema';
import { TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectSchema as TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInput.schema';
import { TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema as TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema } from './TeamCoachRelationshipCreateManyCoachInputEnvelope.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectSchema as TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInput.schema';
import { TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectSchema as TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInput.schema';
import { TeamCoachRelationshipScalarWhereInputObjectSchema as TeamCoachRelationshipScalarWhereInputObjectSchema } from './TeamCoachRelationshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema).array(), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema), z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TeamCoachRelationshipUpdateManyWithoutCoachNestedInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithoutCoachNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithoutCoachNestedInput>;
export const TeamCoachRelationshipUpdateManyWithoutCoachNestedInputObjectZodSchema = makeSchema();
