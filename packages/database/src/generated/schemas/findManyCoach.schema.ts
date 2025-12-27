import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachOrderByWithRelationInputObjectSchema as CoachOrderByWithRelationInputObjectSchema } from './objects/CoachOrderByWithRelationInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';
import { CoachScalarFieldEnumSchema } from './enums/CoachScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CoachFindManySelectSchema: z.ZodType<Prisma.CoachSelect> = z.object({
    id: z.boolean().optional(),
    externalCoachId: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    signature: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    primarySchool: z.boolean().optional(),
    teamRelationship: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CoachSelect>;

export const CoachFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    externalCoachId: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    signature: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    schoolId: z.boolean().optional(),
    school: z.boolean().optional(),
    primarySchool: z.boolean().optional(),
    teamRelationship: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CoachFindManySchema: z.ZodType<Prisma.CoachFindManyArgs> = z.object({ select: CoachFindManySelectSchema.optional(), include: z.lazy(() => CoachIncludeObjectSchema.optional()), orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoachScalarFieldEnumSchema, CoachScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CoachFindManyArgs>;

export const CoachFindManyZodSchema = z.object({ select: CoachFindManySelectSchema.optional(), include: z.lazy(() => CoachIncludeObjectSchema.optional()), orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CoachScalarFieldEnumSchema, CoachScalarFieldEnumSchema.array()]).optional() }).strict();