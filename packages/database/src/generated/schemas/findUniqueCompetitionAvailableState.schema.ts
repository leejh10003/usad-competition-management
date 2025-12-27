import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './objects/CompetitionAvailableStateWhereUniqueInput.schema';

export const CompetitionAvailableStateFindUniqueSchema: z.ZodType<Prisma.CompetitionAvailableStateFindUniqueArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateFindUniqueArgs>;

export const CompetitionAvailableStateFindUniqueZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict();