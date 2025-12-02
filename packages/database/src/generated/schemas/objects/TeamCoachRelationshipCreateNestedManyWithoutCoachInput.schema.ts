import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateOrConnectWithoutCoachInput.schema';
import { TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema as TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema } from './TeamCoachRelationshipCreateManyCoachInputEnvelope.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema).array(), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCoachRelationshipCreateManyCoachInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema), z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateNestedManyWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateNestedManyWithoutCoachInput>;
export const TeamCoachRelationshipCreateNestedManyWithoutCoachInputObjectZodSchema = makeSchema();
