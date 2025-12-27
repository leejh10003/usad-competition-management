import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './objects/CompetitionAvailableStateInclude.schema';
import { CompetitionAvailableStateUpdateInputObjectSchema as CompetitionAvailableStateUpdateInputObjectSchema } from './objects/CompetitionAvailableStateUpdateInput.schema';
import { CompetitionAvailableStateUncheckedUpdateInputObjectSchema as CompetitionAvailableStateUncheckedUpdateInputObjectSchema } from './objects/CompetitionAvailableStateUncheckedUpdateInput.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './objects/CompetitionAvailableStateWhereUniqueInput.schema';

export const CompetitionAvailableStateUpdateOneSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), data: z.union([CompetitionAvailableStateUpdateInputObjectSchema, CompetitionAvailableStateUncheckedUpdateInputObjectSchema]), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateArgs>;

export const CompetitionAvailableStateUpdateOneZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), include: CompetitionAvailableStateIncludeObjectSchema.optional(), data: z.union([CompetitionAvailableStateUpdateInputObjectSchema, CompetitionAvailableStateUncheckedUpdateInputObjectSchema]), where: CompetitionAvailableStateWhereUniqueInputObjectSchema }).strict();