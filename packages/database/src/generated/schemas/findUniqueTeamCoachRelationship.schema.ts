import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './objects/TeamCoachRelationshipInclude.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './objects/TeamCoachRelationshipWhereUniqueInput.schema';

export const TeamCoachRelationshipFindUniqueSchema: z.ZodType<Prisma.TeamCoachRelationshipFindUniqueArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), where: TeamCoachRelationshipWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipFindUniqueArgs>;

export const TeamCoachRelationshipFindUniqueZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), include: TeamCoachRelationshipIncludeObjectSchema.optional(), where: TeamCoachRelationshipWhereUniqueInputObjectSchema }).strict();