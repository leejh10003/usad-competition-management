import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolIncludeObjectSchema as SchoolIncludeObjectSchema } from './objects/SchoolInclude.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolCreateInputObjectSchema as SchoolCreateInputObjectSchema } from './objects/SchoolCreateInput.schema';
import { SchoolUncheckedCreateInputObjectSchema as SchoolUncheckedCreateInputObjectSchema } from './objects/SchoolUncheckedCreateInput.schema';
import { SchoolUpdateInputObjectSchema as SchoolUpdateInputObjectSchema } from './objects/SchoolUpdateInput.schema';
import { SchoolUncheckedUpdateInputObjectSchema as SchoolUncheckedUpdateInputObjectSchema } from './objects/SchoolUncheckedUpdateInput.schema';

export const SchoolUpsertOneSchema: z.ZodType<Prisma.SchoolUpsertArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema, create: z.union([ SchoolCreateInputObjectSchema, SchoolUncheckedCreateInputObjectSchema ]), update: z.union([ SchoolUpdateInputObjectSchema, SchoolUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SchoolUpsertArgs>;

export const SchoolUpsertOneZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), include: SchoolIncludeObjectSchema.optional(), where: SchoolWhereUniqueInputObjectSchema, create: z.union([ SchoolCreateInputObjectSchema, SchoolUncheckedCreateInputObjectSchema ]), update: z.union([ SchoolUpdateInputObjectSchema, SchoolUncheckedUpdateInputObjectSchema ]) }).strict();