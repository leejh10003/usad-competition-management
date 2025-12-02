import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipScalarWhereInputObjectSchema as TeamCoachRelationshipScalarWhereInputObjectSchema } from './TeamCoachRelationshipScalarWhereInput.schema';
import { TeamCoachRelationshipUpdateManyMutationInputObjectSchema as TeamCoachRelationshipUpdateManyMutationInputObjectSchema } from './TeamCoachRelationshipUpdateManyMutationInput.schema';
import { TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInputObjectSchema as TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TeamCoachRelationshipUpdateManyMutationInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInput>;
export const TeamCoachRelationshipUpdateManyWithWhereWithoutCoachInputObjectZodSchema = makeSchema();
