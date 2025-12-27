import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateUpdateManyMutationInputObjectSchema as CompetitionAvailableStateUpdateManyMutationInputObjectSchema } from './objects/CompetitionAvailableStateUpdateManyMutationInput.schema';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './objects/CompetitionAvailableStateWhereInput.schema';

export const CompetitionAvailableStateUpdateManyAndReturnSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateManyAndReturnArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), data: CompetitionAvailableStateUpdateManyMutationInputObjectSchema, where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateManyAndReturnArgs>;

export const CompetitionAvailableStateUpdateManyAndReturnZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), data: CompetitionAvailableStateUpdateManyMutationInputObjectSchema, where: CompetitionAvailableStateWhereInputObjectSchema.optional() }).strict();