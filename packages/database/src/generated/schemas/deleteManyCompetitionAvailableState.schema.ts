import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './objects/CompetitionAvailableStateWhereInput.schema';

export const CompetitionAvailableStateDeleteManySchema: z.ZodType<Prisma.CompetitionAvailableStateDeleteManyArgs> = z.object({ where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateDeleteManyArgs>;

export const CompetitionAvailableStateDeleteManyZodSchema = z.object({ where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict();