import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema as TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUpdateWithoutCoachInput.schema';
import { TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateWithoutCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TeamCoachRelationshipUpdateWithoutCoachInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateWithoutCoachInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInput>;
export const TeamCoachRelationshipUpdateWithWhereUniqueWithoutCoachInputObjectZodSchema = makeSchema();
