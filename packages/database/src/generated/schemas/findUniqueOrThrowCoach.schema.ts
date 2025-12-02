import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachIncludeObjectSchema as CoachIncludeObjectSchema } from './objects/CoachInclude.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';

export const CoachFindUniqueOrThrowSchema: z.ZodType<Prisma.CoachFindUniqueOrThrowArgs> = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CoachFindUniqueOrThrowArgs>;

export const CoachFindUniqueOrThrowZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), include: CoachIncludeObjectSchema.optional(), where: CoachWhereUniqueInputObjectSchema }).strict();