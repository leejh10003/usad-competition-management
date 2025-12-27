import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateCreateInputObjectSchema as CompetitionAvailableStateCreateInputObjectSchema } from './objects/CompetitionAvailableStateCreateInput.schema';
import { CompetitionAvailableStateUncheckedCreateInputObjectSchema as CompetitionAvailableStateUncheckedCreateInputObjectSchema } from './objects/CompetitionAvailableStateUncheckedCreateInput.schema';

export const CompetitionAvailableStateCreateOneSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), data: z.union([CompetitionAvailableStateCreateInputObjectSchema, CompetitionAvailableStateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateArgs>;

export const CompetitionAvailableStateCreateOneZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), data: z.union([CompetitionAvailableStateCreateInputObjectSchema, CompetitionAvailableStateUncheckedCreateInputObjectSchema]) }).strict();