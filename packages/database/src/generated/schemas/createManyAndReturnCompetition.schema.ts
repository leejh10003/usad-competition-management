import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionSelectObjectSchema as CompetitionSelectObjectSchema } from './objects/CompetitionSelect.schema';
import { CompetitionCreateManyInputObjectSchema as CompetitionCreateManyInputObjectSchema } from './objects/CompetitionCreateManyInput.schema';

export const CompetitionCreateManyAndReturnSchema: z.ZodType<Prisma.CompetitionCreateManyAndReturnArgs> = z.object({ select: CompetitionSelectObjectSchema.optional(), data: z.union([ CompetitionCreateManyInputObjectSchema, z.array(CompetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionCreateManyAndReturnArgs>;

export const CompetitionCreateManyAndReturnZodSchema = z.object({ select: CompetitionSelectObjectSchema.optional(), data: z.union([ CompetitionCreateManyInputObjectSchema, z.array(CompetitionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();