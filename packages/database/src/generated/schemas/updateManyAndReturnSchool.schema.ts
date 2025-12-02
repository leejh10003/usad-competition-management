import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolSelectObjectSchema as SchoolSelectObjectSchema } from './objects/SchoolSelect.schema';
import { SchoolUpdateManyMutationInputObjectSchema as SchoolUpdateManyMutationInputObjectSchema } from './objects/SchoolUpdateManyMutationInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';

export const SchoolUpdateManyAndReturnSchema: z.ZodType<Prisma.SchoolUpdateManyAndReturnArgs> = z.object({ select: SchoolSelectObjectSchema.optional(), data: SchoolUpdateManyMutationInputObjectSchema, where: SchoolWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SchoolUpdateManyAndReturnArgs>;

export const SchoolUpdateManyAndReturnZodSchema = z.object({ select: SchoolSelectObjectSchema.optional(), data: SchoolUpdateManyMutationInputObjectSchema, where: SchoolWhereInputObjectSchema.optional() }).strict();