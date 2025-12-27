import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './objects/CompetitionAvailableStateWhereUniqueInput.schema';

export const CompetitionAvailableStateFindUniqueOrThrowSchema: z.ZodType<Prisma.CompetitionAvailableStateFindUniqueOrThrowArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateFindUniqueOrThrowArgs>;

export const CompetitionAvailableStateFindUniqueOrThrowZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict();