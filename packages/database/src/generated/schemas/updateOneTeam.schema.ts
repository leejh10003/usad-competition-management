import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamUpdateInputObjectSchema as TeamUpdateInputObjectSchema } from './objects/TeamUpdateInput.schema';
import { TeamUncheckedUpdateInputObjectSchema as TeamUncheckedUpdateInputObjectSchema } from './objects/TeamUncheckedUpdateInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';

export const TeamUpdateOneSchema: z.ZodType<Prisma.TeamUpdateArgs> = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), data: z.union([TeamUpdateInputObjectSchema, TeamUncheckedUpdateInputObjectSchema]), where: TeamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TeamUpdateArgs>;

export const TeamUpdateOneZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), data: z.union([TeamUpdateInputObjectSchema, TeamUncheckedUpdateInputObjectSchema]), where: TeamWhereUniqueInputObjectSchema }).strict();