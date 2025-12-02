import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema';
import { CoachUpdateWithoutTeamRelationshipInputObjectSchema as CoachUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUpdateWithoutTeamRelationshipInput.schema';
import { CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema as CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema } from './CoachUncheckedUpdateWithoutTeamRelationshipInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CoachUpdateWithoutTeamRelationshipInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema)])
}).strict();
export const CoachUpdateToOneWithWhereWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachUpdateToOneWithWhereWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateToOneWithWhereWithoutTeamRelationshipInput>;
export const CoachUpdateToOneWithWhereWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
