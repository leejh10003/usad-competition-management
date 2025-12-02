import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachUpdateInputObjectSchema as CoachUpdateInputObjectSchema } from './objects/CoachUpdateInput.schema';
import { CoachUncheckedUpdateInputObjectSchema as CoachUncheckedUpdateInputObjectSchema } from './objects/CoachUncheckedUpdateInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';

export const CoachUpdateOneSchema: z.ZodType<Prisma.CoachUpdateArgs> = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), data: z.union([CoachUpdateInputObjectSchema, CoachUncheckedUpdateInputObjectSchema]), where: CoachWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoachUpdateArgs>;

export const CoachUpdateOneZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), data: z.union([CoachUpdateInputObjectSchema, CoachUncheckedUpdateInputObjectSchema]), where: CoachWhereUniqueInputObjectSchema }).strict();