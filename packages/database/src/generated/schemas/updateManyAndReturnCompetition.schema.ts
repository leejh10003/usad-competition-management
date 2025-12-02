import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionUpdateManyMutationInputObjectSchema as CompetitionUpdateManyMutationInputObjectSchema } from './objects/CompetitionUpdateManyMutationInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './objects/CompetitionWhereInput.schema';

export const CompetitionUpdateManyAndReturnSchema: z.ZodType<Prisma.CompetitionUpdateManyAndReturnArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), data: CompetitionUpdateManyMutationInputObjectSchema, where: CompetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionUpdateManyAndReturnArgs>;

export const CompetitionUpdateManyAndReturnZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), data: CompetitionUpdateManyMutationInputObjectSchema, where: CompetitionWhereInputObjectSchema.optional() }).strict();