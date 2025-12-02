import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachUpdateManyMutationInputObjectSchema as CoachUpdateManyMutationInputObjectSchema } from './objects/CoachUpdateManyMutationInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';

export const CoachUpdateManyAndReturnSchema: z.ZodType<Prisma.CoachUpdateManyAndReturnArgs> = z.object({ select: CoachSelectObjectSchema.optional(), data: CoachUpdateManyMutationInputObjectSchema, where: CoachWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoachUpdateManyAndReturnArgs>;

export const CoachUpdateManyAndReturnZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), data: CoachUpdateManyMutationInputObjectSchema, where: CoachWhereInputObjectSchema.optional() }).strict();