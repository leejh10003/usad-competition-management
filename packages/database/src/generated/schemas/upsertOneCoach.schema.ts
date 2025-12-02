import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';
import { CoachCreateInputObjectSchema as CoachCreateInputObjectSchema } from './objects/CoachCreateInput.schema';
import { CoachUncheckedCreateInputObjectSchema as CoachUncheckedCreateInputObjectSchema } from './objects/CoachUncheckedCreateInput.schema';
import { CoachUpdateInputObjectSchema as CoachUpdateInputObjectSchema } from './objects/CoachUpdateInput.schema';
import { CoachUncheckedUpdateInputObjectSchema as CoachUncheckedUpdateInputObjectSchema } from './objects/CoachUncheckedUpdateInput.schema';

export const CoachUpsertOneSchema: z.ZodType<Prisma.CoachUpsertArgs> = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema, create: z.union([ CoachCreateInputObjectSchema, CoachUncheckedCreateInputObjectSchema ]), update: z.union([ CoachUpdateInputObjectSchema, CoachUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CoachUpsertArgs>;

export const CoachUpsertOneZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema, create: z.union([ CoachCreateInputObjectSchema, CoachUncheckedCreateInputObjectSchema ]), update: z.union([ CoachUpdateInputObjectSchema, CoachUncheckedUpdateInputObjectSchema ]) }).strict();