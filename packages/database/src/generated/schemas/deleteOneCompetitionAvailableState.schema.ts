import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './objects/CompetitionAvailableStateWhereUniqueInput.schema';

export const CompetitionAvailableStateDeleteOneSchema: z.ZodType<Prisma.CompetitionAvailableStateDeleteArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateDeleteArgs>;

export const CompetitionAvailableStateDeleteOneZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict();