import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutTeamRelationshipInputObjectSchema as CoachCreateWithoutTeamRelationshipInputObjectSchema } from './CoachCreateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedCreateWithoutTeamRelationshipInput.schema';
import { CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema as CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema } from './CoachCreateOrConnectWithoutTeamRelationshipInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema).optional(),
  connect: z.lazy(() => CoachWhereUniqueInputObjectSchema).optional()
}).strict();
export const CoachCreateNestedOneWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachCreateNestedOneWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateNestedOneWithoutTeamRelationshipInput>;
export const CoachCreateNestedOneWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
