import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolUpdateManyMutationInputObjectSchema as SchoolUpdateManyMutationInputObjectSchema } from './objects/SchoolUpdateManyMutationInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';

export const SchoolUpdateManySchema: z.ZodType<Prisma.SchoolUpdateManyArgs> = z.object({ data: SchoolUpdateManyMutationInputObjectSchema, where: SchoolWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SchoolUpdateManyArgs>;

export const SchoolUpdateManyZodSchema = z.object({ data: SchoolUpdateManyMutationInputObjectSchema, where: SchoolWhereInputObjectSchema.optional() }).strict();