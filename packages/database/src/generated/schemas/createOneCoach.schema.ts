import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachCreateInputObjectSchema as CoachCreateInputObjectSchema } from './objects/CoachCreateInput.schema';
import { CoachUncheckedCreateInputObjectSchema as CoachUncheckedCreateInputObjectSchema } from './objects/CoachUncheckedCreateInput.schema';

export const CoachCreateOneSchema: z.ZodType<Prisma.CoachCreateArgs> = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), data: z.union([CoachCreateInputObjectSchema, CoachUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CoachCreateArgs>;

export const CoachCreateOneZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), data: z.union([CoachCreateInputObjectSchema, CoachUncheckedCreateInputObjectSchema]) }).strict();