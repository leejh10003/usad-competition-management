import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolCreateInputObjectSchema as SchoolCreateInputObjectSchema } from './objects/SchoolCreateInput.schema';
import { SchoolUncheckedCreateInputObjectSchema as SchoolUncheckedCreateInputObjectSchema } from './objects/SchoolUncheckedCreateInput.schema';

export const SchoolCreateOneSchema: z.ZodType<Prisma.SchoolCreateArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), data: z.union([SchoolCreateInputObjectSchema, SchoolUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SchoolCreateArgs>;

export const SchoolCreateOneZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), data: z.union([SchoolCreateInputObjectSchema, SchoolUncheckedCreateInputObjectSchema]) }).strict();