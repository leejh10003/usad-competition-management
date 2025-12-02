import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachUpdateWithoutTeamRelationshipInputObjectSchema as CoachUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUpdateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedUpdateWithoutTeamRelationshipInput.schema';
import { CoachCreateWithoutTeamRelationshipInputObjectSchema as CoachCreateWithoutTeamRelationshipInputObjectSchema } from './CoachCreateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedCreateWithoutTeamRelationshipInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CoachUpdateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema)]),
  create: z.union([z.lazy(() => CoachCreateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutTeamRelationshipInputObjectSchema)]),
  where: z.lazy(() => CoachWhereInputObjectSchema).optional()
}).strict();
export const CoachUpsertWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachUpsertWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpsertWithoutTeamRelationshipInput>;
export const CoachUpsertWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
