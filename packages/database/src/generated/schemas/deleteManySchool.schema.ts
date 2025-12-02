import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';

export const SchoolDeleteManySchema: z.ZodType<Prisma.SchoolDeleteManyArgs> = z.object({ where: SchoolWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SchoolDeleteManyArgs>;

export const SchoolDeleteManyZodSchema = z.object({ where: SchoolWhereInputObjectSchema.optional() }).strict();