import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './objects/CompetitionInclude.schema';
import { CompetitionCreateInputObjectSchema as CompetitionCreateInputObjectSchema } from './objects/CompetitionCreateInput.schema';
import { CompetitionUncheckedCreateInputObjectSchema as CompetitionUncheckedCreateInputObjectSchema } from './objects/CompetitionUncheckedCreateInput.schema';

export const CompetitionCreateOneSchema: z.ZodType<Prisma.CompetitionCreateArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), data: z.union([CompetitionCreateInputObjectSchema, CompetitionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CompetitionCreateArgs>;

export const CompetitionCreateOneZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), data: z.union([CompetitionCreateInputObjectSchema, CompetitionUncheckedCreateInputObjectSchema]) }).strict();