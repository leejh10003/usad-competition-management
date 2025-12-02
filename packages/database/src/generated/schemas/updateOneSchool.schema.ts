import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolUpdateInputObjectSchema as SchoolUpdateInputObjectSchema } from './objects/SchoolUpdateInput.schema';
import { SchoolUncheckedUpdateInputObjectSchema as SchoolUncheckedUpdateInputObjectSchema } from './objects/SchoolUncheckedUpdateInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';

export const SchoolUpdateOneSchema: z.ZodType<Prisma.SchoolUpdateArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), data: z.union([SchoolUpdateInputObjectSchema, SchoolUncheckedUpdateInputObjectSchema]), where: SchoolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SchoolUpdateArgs>;

export const SchoolUpdateOneZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), data: z.union([SchoolUpdateInputObjectSchema, SchoolUncheckedUpdateInputObjectSchema]), where: SchoolWhereUniqueInputObjectSchema }).strict();