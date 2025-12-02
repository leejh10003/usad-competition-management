import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionUpdateManyMutationInputObjectSchema as CompetitionUpdateManyMutationInputObjectSchema } from './objects/CompetitionUpdateManyMutationInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './objects/CompetitionWhereInput.schema';

export const CompetitionUpdateManySchema: z.ZodType<Prisma.CompetitionUpdateManyArgs> = z.object({ data: CompetitionUpdateManyMutationInputObjectSchema, where: CompetitionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionUpdateManyArgs>;

export const CompetitionUpdateManyZodSchema = z.object({ data: CompetitionUpdateManyMutationInputObjectSchema, where: CompetitionWhereInputObjectSchema.optional() }).strict();