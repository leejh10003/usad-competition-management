import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './objects/CompetitionInclude.schema';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './objects/CompetitionOrderByWithRelationInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './objects/CompetitionWhereInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './objects/CompetitionWhereUniqueInput.schema';
import { CompetitionScalarFieldEnumSchema } from './enums/CompetitionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompetitionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CompetitionSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    startsAt: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    events: z.boolean().optional(),
    state: z.boolean().optional(),
    schools: z.boolean().optional(),
    students: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompetitionSelect>;

export const CompetitionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    startsAt: z.boolean().optional(),
    endsAt: z.boolean().optional(),
    events: z.boolean().optional(),
    state: z.boolean().optional(),
    schools: z.boolean().optional(),
    students: z.boolean().optional(),
    mutationIndex: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CompetitionFindFirstOrThrowSchema: z.ZodType<Prisma.CompetitionFindFirstOrThrowArgs> = z.object({ select: CompetitionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompetitionIncludeObjectSchema.optional()), orderBy: z.union([CompetitionOrderByWithRelationInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionWhereInputObjectSchema.optional(), cursor: CompetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompetitionScalarFieldEnumSchema, CompetitionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionFindFirstOrThrowArgs>;

export const CompetitionFindFirstOrThrowZodSchema = z.object({ select: CompetitionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompetitionIncludeObjectSchema.optional()), orderBy: z.union([CompetitionOrderByWithRelationInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionWhereInputObjectSchema.optional(), cursor: CompetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompetitionScalarFieldEnumSchema, CompetitionScalarFieldEnumSchema.array()]).optional() }).strict();