import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './objects/CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateCreateManyInputObjectSchema as CompetitionAvailableStateCreateManyInputObjectSchema } from './objects/CompetitionAvailableStateCreateManyInput.schema';

export const CompetitionAvailableStateCreateManyAndReturnSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateManyAndReturnArgs> = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), data: z.union([ CompetitionAvailableStateCreateManyInputObjectSchema, z.array(CompetitionAvailableStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateManyAndReturnArgs>;

export const CompetitionAvailableStateCreateManyAndReturnZodSchema = z.object({ select: CompetitionAvailableStateSelectObjectSchema.optional(), data: z.union([ CompetitionAvailableStateCreateManyInputObjectSchema, z.array(CompetitionAvailableStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();