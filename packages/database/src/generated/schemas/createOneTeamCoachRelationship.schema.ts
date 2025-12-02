import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './objects/TeamCoachRelationshipInclude.schema';
import { TeamCoachRelationshipCreateInputObjectSchema as TeamCoachRelationshipCreateInputObjectSchema } from './objects/TeamCoachRelationshipCreateInput.schema';
import { TeamCoachRelationshipUncheckedCreateInputObjectSchema as TeamCoachRelationshipUncheckedCreateInputObjectSchema } from './objects/TeamCoachRelationshipUncheckedCreateInput.schema';

export const TeamCoachRelationshipCreateOneSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), data: z.union([TeamCoachRelationshipCreateInputObjectSchema, TeamCoachRelationshipUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateArgs>;

export const TeamCoachRelationshipCreateOneZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), data: z.union([TeamCoachRelationshipCreateInputObjectSchema, TeamCoachRelationshipUncheckedCreateInputObjectSchema]) }).strict();