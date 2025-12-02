import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolFindUniqueSchema: z.ZodType<Prisma.SchoolFindUniqueArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SchoolFindUniqueArgs>;

export const SchoolFindUniqueZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict();