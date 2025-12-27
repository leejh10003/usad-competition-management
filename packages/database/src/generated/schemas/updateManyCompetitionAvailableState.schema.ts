import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateUpdateManyMutationInputObjectSchema as CompetitionAvailableStateUpdateManyMutationInputObjectSchema } from './objects/CompetitionAvailableStateUpdateManyMutationInput.schema';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './objects/CompetitionAvailableStateWhereInput.schema';

export const CompetitionAvailableStateUpdateManySchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateManyArgs> = z.object({ data: CompetitionAvailableStateUpdateManyMutationInputObjectSchema, where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateManyArgs>;

export const CompetitionAvailableStateUpdateManyZodSchema = z.object({ data: CompetitionAvailableStateUpdateManyMutationInputObjectSchema, where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict();