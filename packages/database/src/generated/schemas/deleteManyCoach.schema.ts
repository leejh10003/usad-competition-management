import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';

export const CoachDeleteManySchema: z.ZodType<Prisma.CoachDeleteManyArgs> = z.object({ where: CoachWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoachDeleteManyArgs>;

export const CoachDeleteManyZodSchema = z.object({ where: CoachWhereInputObjectSchema.optional() }).strict();