import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './objects/SchoolOrderByWithRelationInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolScalarFieldEnumSchema } from './enums/SchoolScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SchoolFindFirstSelectSchema: z.ZodType<Prisma.SchoolSelect> = z.object({
    id: z.boolean().optional(),
    externalSchoolId: z.boolean().optional(),
    name: z.boolean().optional(),
    isVirtual: z.boolean().optional(),
    streetAddress: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    phone: z.boolean().optional(),
    principalName: z.boolean().optional(),
    principalEmail: z.boolean().optional(),
    objectiveScore: z.boolean().optional(),
    subjectiveScore: z.boolean().optional(),
    primaryCoachId: z.boolean().optional(),
    primaryCoach: z.boolean().optional(),
    emailDomain: z.boolean().optional(),
    division: z.boolean().optional(),
    competitionId: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    competition: z.boolean().optional(),
    coaches: z.boolean().optional(),
    teams: z.boolean().optional(),
    students: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SchoolSelect>;

export const SchoolFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    externalSchoolId: z.boolean().optional(),
    name: z.boolean().optional(),
    isVirtual: z.boolean().optional(),
    streetAddress: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    phone: z.boolean().optional(),
    principalName: z.boolean().optional(),
    principalEmail: z.boolean().optional(),
    objectiveScore: z.boolean().optional(),
    subjectiveScore: z.boolean().optional(),
    primaryCoachId: z.boolean().optional(),
    primaryCoach: z.boolean().optional(),
    emailDomain: z.boolean().optional(),
    division: z.boolean().optional(),
    competitionId: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    competition: z.boolean().optional(),
    coaches: z.boolean().optional(),
    teams: z.boolean().optional(),
    students: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SchoolFindFirstSchema: z.ZodType<Prisma.SchoolFindFirstArgs> = z.object({ select: SchoolFindFirstSelectSchema.optional(), include: z.lazy(() => SchoolIncludeObjectSchema.optional()), orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SchoolScalarFieldEnumSchema, SchoolScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SchoolFindFirstArgs>;

export const SchoolFindFirstZodSchema = z.object({ select: SchoolFindFirstSelectSchema.optional(), include: z.lazy(() => SchoolIncludeObjectSchema.optional()), orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SchoolScalarFieldEnumSchema, SchoolScalarFieldEnumSchema.array()]).optional() }).strict();