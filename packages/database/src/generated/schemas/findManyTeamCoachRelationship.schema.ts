import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './objects/TeamCoachRelationshipInclude.schema';
import { TeamCoachRelationshipOrderByWithRelationInputObjectSchema as TeamCoachRelationshipOrderByWithRelationInputObjectSchema } from './objects/TeamCoachRelationshipOrderByWithRelationInput.schema';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './objects/TeamCoachRelationshipWhereInput.schema';
import { TeamCoachRelationshipWhereUniqueInputObjectSchema as TeamCoachRelationshipWhereUniqueInputObjectSchema } from './objects/TeamCoachRelationshipWhereUniqueInput.schema';
import { TeamCoachRelationshipScalarFieldEnumSchema } from './enums/TeamCoachRelationshipScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamCoachRelationshipFindManySelectSchema: z.ZodType<Prisma.TeamCoachRelationshipSelect> = z.object({
    teamId: z.boolean().optional(),
    team: z.boolean().optional(),
    coachId: z.boolean().optional(),
    coach: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipSelect>;

export const TeamCoachRelationshipFindManySelectZodSchema = z.object({
    teamId: z.boolean().optional(),
    team: z.boolean().optional(),
    coachId: z.boolean().optional(),
    coach: z.boolean().optional()
  }).strict();

export const TeamCoachRelationshipFindManySchema: z.ZodType<Prisma.TeamCoachRelationshipFindManyArgs> = z.object({ select: TeamCoachRelationshipFindManySelectSchema.optional(), include: z.lazy(() => TeamCoachRelationshipIncludeObjectSchema.optional()), orderBy: z.union([TeamCoachRelationshipOrderByWithRelationInputObjectSchema, TeamCoachRelationshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamCoachRelationshipWhereInputObjectSchema.optional(), cursor: TeamCoachRelationshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TeamCoachRelationshipScalarFieldEnumSchema, TeamCoachRelationshipScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipFindManyArgs>;

export const TeamCoachRelationshipFindManyZodSchema = z.object({ select: TeamCoachRelationshipFindManySelectSchema.optional(), include: z.lazy(() => TeamCoachRelationshipIncludeObjectSchema.optional()), orderBy: z.union([TeamCoachRelationshipOrderByWithRelationInputObjectSchema, TeamCoachRelationshipOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamCoachRelationshipWhereInputObjectSchema.optional(), cursor: TeamCoachRelationshipWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TeamCoachRelationshipScalarFieldEnumSchema, TeamCoachRelationshipScalarFieldEnumSchema.array()]).optional() }).strict();