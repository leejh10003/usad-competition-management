import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionIncludeObjectSchema as CompetitionIncludeObjectSchema } from './objects/CompetitionInclude.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './objects/CompetitionWhereUniqueInput.schema';

export const CompetitionFindUniqueSchema: z.ZodType<Prisma.CompetitionFindUniqueArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), where: CompetitionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CompetitionFindUniqueArgs>;

export const CompetitionFindUniqueZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), include: CompetitionIncludeObjectSchema.optional(), where: CompetitionWhereUniqueInputObjectSchema }).strict();