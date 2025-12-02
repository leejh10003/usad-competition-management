import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachUpdateManyMutationInputObjectSchema as CoachUpdateManyMutationInputObjectSchema } from './objects/CoachUpdateManyMutationInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';

export const CoachUpdateManySchema: z.ZodType<Prisma.CoachUpdateManyArgs> = z.object({ data: CoachUpdateManyMutationInputObjectSchema, where: CoachWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoachUpdateManyArgs>;

export const CoachUpdateManyZodSchema = z.object({ data: CoachUpdateManyMutationInputObjectSchema, where: CoachWhereInputObjectSchema.optional() }).strict();