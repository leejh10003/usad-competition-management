import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamOrderByWithRelationInputObjectSchema as TeamOrderByWithRelationInputObjectSchema } from './objects/TeamOrderByWithRelationInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamScalarFieldEnumSchema } from './enums/TeamScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamFindFirstSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
    id: z.boolean().optional(),
    externalTeamId: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    division: z.boolean().optional(),
    objectiveScore: z.boolean().optional(),
    subjectiveScore: z.boolean().optional(),
    coachesRelationship: z.boolean().optional(),
    students: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TeamSelect>;

export const TeamFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    externalTeamId: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    division: z.boolean().optional(),
    objectiveScore: z.boolean().optional(),
    subjectiveScore: z.boolean().optional(),
    coachesRelationship: z.boolean().optional(),
    students: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TeamFindFirstSchema: z.ZodType<Prisma.TeamFindFirstArgs> = z.object({ select: TeamFindFirstSelectSchema.optional(), include: z.lazy(() => TeamIncludeObjectSchema.optional()), orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TeamFindFirstArgs>;

export const TeamFindFirstZodSchema = z.object({ select: TeamFindFirstSelectSchema.optional(), include: z.lazy(() => TeamIncludeObjectSchema.optional()), orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array()]).optional() }).strict();