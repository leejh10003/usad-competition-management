import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './objects/TeamCoachRelationshipInclude.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './objects/TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipCreateInputObjectSchema as TeamCoachRelationshipCreateInputObjectSchema } from './objects/TeamCoachRelationshipCreateInput.schema';
import { TeamCoachRelationshipUncheckedCreateInputObjectSchema as TeamCoachRelationshipUncheckedCreateInputObjectSchema } from './objects/TeamCoachRelationshipUncheckedCreateInput.schema';
import { TeamCoachRelationshipUpdateInputObjectSchema as TeamCoachRelationshipUpdateInputObjectSchema } from './objects/TeamCoachRelationshipUpdateInput.schema';
import { TeamCoachRelationshipUncheckedUpdateInputObjectSchema as TeamCoachRelationshipUncheckedUpdateInputObjectSchema } from './objects/TeamCoachRelationshipUncheckedUpdateInput.schema';

export const TeamCoachRelationshipUpsertOneSchema: z.ZodType<Prisma.TeamCoachRelationshipUpsertArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), where: TeamCoachRelationshipWhereUniqueInputObjectSchema, create: z.union([ TeamCoachRelationshipCreateInputObjectSchema, TeamCoachRelationshipUncheckedCreateInputObjectSchema ]), update: z.union([ TeamCoachRelationshipUpdateInputObjectSchema, TeamCoachRelationshipUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpsertArgs>;

export const TeamCoachRelationshipUpsertOneZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), where: TeamCoachRelationshipWhereUniqueInputObjectSchema, create: z.union([ TeamCoachRelationshipCreateInputObjectSchema, TeamCoachRelationshipUncheckedCreateInputObjectSchema ]), update: z.union([ TeamCoachRelationshipUpdateInputObjectSchema, TeamCoachRelationshipUncheckedUpdateInputObjectSchema ]) }).strict();