import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './objects/CompetitionInclude.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './objects/CompetitionWhereUniqueInput.schema';
import { CompetitionCreateInputObjectSchema as CompetitionCreateInputObjectSchema } from './objects/CompetitionCreateInput.schema';
import { CompetitionUncheckedCreateInputObjectSchema as CompetitionUncheckedCreateInputObjectSchema } from './objects/CompetitionUncheckedCreateInput.schema';
import { CompetitionUpdateInputObjectSchema as CompetitionUpdateInputObjectSchema } from './objects/CompetitionUpdateInput.schema';
import { CompetitionUncheckedUpdateInputObjectSchema as CompetitionUncheckedUpdateInputObjectSchema } from './objects/CompetitionUncheckedUpdateInput.schema';

export const CompetitionUpsertOneSchema: z.ZodType<Prisma.CompetitionUpsertArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), where: CompetitionWhereUniqueInputObjectSchema, create: z.union([ CompetitionCreateInputObjectSchema, CompetitionUncheckedCreateInputObjectSchema ]), update: z.union([ CompetitionUpdateInputObjectSchema, CompetitionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CompetitionUpsertArgs>;

export const CompetitionUpsertOneZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), where: CompetitionWhereUniqueInputObjectSchema, create: z.union([ CompetitionCreateInputObjectSchema, CompetitionUncheckedCreateInputObjectSchema ]), update: z.union([ CompetitionUpdateInputObjectSchema, CompetitionUncheckedUpdateInputObjectSchema ]) }).strict();