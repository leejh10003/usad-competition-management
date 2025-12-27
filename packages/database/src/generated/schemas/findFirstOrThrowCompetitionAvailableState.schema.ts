import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateOrderByWithRelationInputObjectSchema as CompetitionAvailableStateOrderByWithRelationInputObjectSchema } from './objects/CompetitionAvailableStateOrderByWithRelationInput.schema';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './objects/CompetitionAvailableStateWhereInput.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './objects/CompetitionAvailableStateWhereUniqueInput.schema';
import { CompetitionAvailableStateScalarFieldEnumSchema } from './enums/CompetitionAvailableStateScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompetitionAvailableStateFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CompetitionAvailableStateSelect> = z.object({
    competitionId: z.boolean().optional(),
    state: z.boolean().optional(),
    competition: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateSelect>;

export const CompetitionAvailableStateFindFirstOrThrowSelectZodSchema = z.object({
    competitionId: z.boolean().optional(),
    state: z.boolean().optional(),
    competition: z.boolean().optional()
  }).strict();

export const CompetitionAvailableStateFindFirstOrThrowSchema: z.ZodType<Prisma.CompetitionAvailableStateFindFirstOrThrowArgs> = z.object({ select: CompetitionAvailableStateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompetitionAvailableStateIncludeObjectSchema.optional()), orderBy: z.union([CompetitionAvailableStateOrderByWithRelationInputObjectSchema, CompetitionAvailableStateOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionAvailableStateWhereInputObjectSchema.optional(), cursor: CompetitionAvailableStateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompetitionAvailableStateScalarFieldEnumSchema, CompetitionAvailableStateScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateFindFirstOrThrowArgs>;

export const CompetitionAvailableStateFindFirstOrThrowZodSchema = z.object({ select: CompetitionAvailableStateFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CompetitionAvailableStateIncludeObjectSchema.optional()), orderBy: z.union([CompetitionAvailableStateOrderByWithRelationInputObjectSchema, CompetitionAvailableStateOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionAvailableStateWhereInputObjectSchema.optional(), cursor: CompetitionAvailableStateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CompetitionAvailableStateScalarFieldEnumSchema, CompetitionAvailableStateScalarFieldEnumSchema.array()]).optional() }).strict();