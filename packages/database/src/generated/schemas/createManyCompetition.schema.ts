import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionCreateManyInputObjectSchema as CompetitionCreateManyInputObjectSchema } from './objects/CompetitionCreateManyInput.schema';

export const CompetitionCreateManySchema: z.ZodType<Prisma.CompetitionCreateManyArgs> = z.object({ data: z.union([ CompetitionCreateManyInputObjectSchema, z.array(CompetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionCreateManyArgs>;

export const CompetitionCreateManyZodSchema = z.object({ data: z.union([ CompetitionCreateManyInputObjectSchema, z.array(CompetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();