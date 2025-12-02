import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema as TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUpdateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateWithoutCoachInput.schema';
import { TeamCoachRelationshipCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipCreateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedCreateWithoutCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema)]),
  create: z.union([z.lazy(() => TeamCoachRelationshipCreateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedCreateWithoutCoachInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInput>;
export const TeamCoachRelationshipUpsertWithWhereUniqueWithoutCoachInputObjectZodSchema = makeSchema();
