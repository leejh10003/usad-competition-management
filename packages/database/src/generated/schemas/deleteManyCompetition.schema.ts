import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './objects/CompetitionWhereInput.schema';

export const CompetitionDeleteManySchema: z.ZodType<Prisma.CompetitionDeleteManyArgs> = z.object({ where: CompetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionDeleteManyArgs>;

export const CompetitionDeleteManyZodSchema = z.object({ where: CompetitionWhereInputObjectSchema.optional() }).strict();