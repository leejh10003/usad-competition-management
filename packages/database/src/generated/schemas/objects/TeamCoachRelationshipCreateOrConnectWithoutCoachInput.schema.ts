import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateOrConnectWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateOrConnectWithoutCoachInput>;
export const TeamCoachRelationshipCreateOrConnectWithoutCoachInputObjectZodSchema = makeSchema();
