import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipCreateManyInputObjectSchema as TeamCoachRelationshipCreateManyInputObjectSchema } from './objects/TeamCoachRelationshipCreateManyInput.schema';

export const TeamCoachRelationshipCreateManyAndReturnSchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyAndReturnArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), data: z.union([ TeamCoachRelationshipCreateManyInputObjectSchema, z.array(TeamCoachRelationshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyAndReturnArgs>;

export const TeamCoachRelationshipCreateManyAndReturnZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), data: z.union([ TeamCoachRelationshipCreateManyInputObjectSchema, z.array(TeamCoachRelationshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();