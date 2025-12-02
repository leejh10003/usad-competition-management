import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolDeleteOneSchema: z.ZodType<Prisma.SchoolDeleteArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SchoolDeleteArgs>;

export const SchoolDeleteOneZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict();