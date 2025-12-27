import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionAvailableStateCreateManyInputObjectSchema as CompetitionAvailableStateCreateManyInputObjectSchema } from './objects/CompetitionAvailableStateCreateManyInput.schema';

export const CompetitionAvailableStateCreateManySchema: z.ZodType<Prisma.CompetitionAvailableStateCreateManyArgs> = z.object({ data: z.union([ CompetitionAvailableStateCreateManyInputObjectSchema, z.array(CompetitionAvailableStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateManyArgs>;

export const CompetitionAvailableStateCreateManyZodSchema = z.object({ data: z.union([ CompetitionAvailableStateCreateManyInputObjectSchema, z.array(CompetitionAvailableStateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();