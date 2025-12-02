import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipScalarWhereInputObjectSchema as TeamCoachRelationshipScalarWhereInputObjectSchema } from './TeamCoachRelationshipScalarWhereInput.schema';
import { TeamCoachRelationshipUpdateManyMutationInputObjectSchema as TeamCoachRelationshipUpdateManyMutationInputObjectSchema } from './TeamCoachRelationshipUpdateManyMutationInput.schema';
import { TeamCoachRelationshipUncheckedUpdateManyWithoutTeamInputObjectSchema as TeamCoachRelationshipUncheckedUpdateManyWithoutTeamInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamCoachRelationshipScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TeamCoachRelationshipUpdateManyMutationInputObjectSchema), z.lazy(() => TeamCoachRelationshipUncheckedUpdateManyWithoutTeamInputObjectSchema)])
}).strict();
export const TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInput>;
export const TeamCoachRelationshipUpdateManyWithWhereWithoutTeamInputObjectZodSchema = makeSchema();
