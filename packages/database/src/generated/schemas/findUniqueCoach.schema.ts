import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';

export const CoachFindUniqueSchema: z.ZodType<Prisma.CoachFindUniqueArgs> = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoachFindUniqueArgs>;

export const CoachFindUniqueZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema }).strict();