import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolFindUniqueOrThrowSchema: z.ZodType<Prisma.SchoolFindUniqueOrThrowArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SchoolFindUniqueOrThrowArgs>;

export const SchoolFindUniqueOrThrowZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema }).strict();