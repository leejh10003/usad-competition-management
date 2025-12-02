import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';

export const TeamFindUniqueSchema: z.ZodType<Prisma.TeamFindUniqueArgs> = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), where: TeamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TeamFindUniqueArgs>;

export const TeamFindUniqueZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), where: TeamWhereUniqueInputObjectSchema }).strict();