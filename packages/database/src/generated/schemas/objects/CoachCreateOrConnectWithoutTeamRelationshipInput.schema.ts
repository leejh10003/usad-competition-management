import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachCreateWithoutTeamRelationshipInputObjectSchema as CoachCreateWithoutTeamRelationshipInputObjectSchema } from './CoachCreateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedCreateWithoutTeamRelationshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CoachCreateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema)])
}).strict();
export const CoachCreateOrConnectWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachCreateOrConnectWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateOrConnectWithoutTeamRelationshipInput>;
export const CoachCreateOrConnectWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
