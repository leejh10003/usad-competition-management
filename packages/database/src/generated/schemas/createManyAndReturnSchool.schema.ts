import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolCreateManyInputObjectSchema as SchoolCreateManyInputObjectSchema } from './objects/SchoolCreateManyInput.schema';

export const SchoolCreateManyAndReturnSchema: z.ZodType<Prisma.SchoolCreateManyAndReturnArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), data: z.union([ SchoolCreateManyInputObjectSchema, z.array(SchoolCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SchoolCreateManyAndReturnArgs>;

export const SchoolCreateManyAndReturnZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), data: z.union([ SchoolCreateManyInputObjectSchema, z.array(SchoolCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();