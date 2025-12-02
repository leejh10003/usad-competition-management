import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './objects/CompetitionInclude.schema';
import { CompetitionUpdateInputObjectSchema as CompetitionUpdateInputObjectSchema } from './objects/CompetitionUpdateInput.schema';
import { CompetitionUncheckedUpdateInputObjectSchema as CompetitionUncheckedUpdateInputObjectSchema } from './objects/CompetitionUncheckedUpdateInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './objects/CompetitionWhereUniqueInput.schema';

export const CompetitionUpdateOneSchema: z.ZodType<Prisma.CompetitionUpdateArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), data: z.union([CompetitionUpdateInputObjectSchema, CompetitionUncheckedUpdateInputObjectSchema]), where: CompetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionUpdateArgs>;

export const CompetitionUpdateOneZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), data: z.union([CompetitionUpdateInputObjectSchema, CompetitionUncheckedUpdateInputObjectSchema]), where: CompetitionWhereUniqueInputObjectSchema }).strict();