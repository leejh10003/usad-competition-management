import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './objects/TeamCoachRelationshipInclude.schema';
import { TeamCoachRelationshipUpdateInputObjectSchema as TeamCoachRelationshipUpdateInputObjectSchema } from './objects/TeamCoachRelationshipUpdateInput.schema';
import { TeamCoachRelationshipUncheckedUpdateInputObjectSchema as TeamCoachRelationshipUncheckedUpdateInputObjectSchema } from './objects/TeamCoachRelationshipUncheckedUpdateInput.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './objects/TeamCoachRelationshipWhereUniqueInput.schema';

export const TeamCoachRelationshipUpdateOneSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), data: z.union([TeamCoachRelationshipUpdateInputObjectSchema, TeamCoachRelationshipUncheckedUpdateInputObjectSchema]), where: TeamCoachRelationshipWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateArgs>;

export const TeamCoachRelationshipUpdateOneZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), data: z.union([TeamCoachRelationshipUpdateInputObjectSchema, TeamCoachRelationshipUncheckedUpdateInputObjectSchema]), where: TeamCoachRelationshipWhereUniqueInputObjectSchema }).strict();