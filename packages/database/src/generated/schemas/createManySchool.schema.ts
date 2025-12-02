import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolCreateManyInputObjectSchema as SchoolCreateManyInputObjectSchema } from './objects/SchoolCreateManyInput.schema';

export const SchoolCreateManySchema: z.ZodType<Prisma.SchoolCreateManyArgs> = z.object({ data: z.union([ SchoolCreateManyInputObjectSchema, z.array(SchoolCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SchoolCreateManyArgs>;

export const SchoolCreateManyZodSchema = z.object({ data: z.union([ SchoolCreateManyInputObjectSchema, z.array(SchoolCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();