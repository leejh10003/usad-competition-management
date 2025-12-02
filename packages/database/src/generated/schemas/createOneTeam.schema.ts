import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamCreateInputObjectSchema as TeamCreateInputObjectSchema } from './objects/TeamCreateInput.schema';
import { TeamUncheckedCreateInputObjectSchema as TeamUncheckedCreateInputObjectSchema } from './objects/TeamUncheckedCreateInput.schema';

export const TeamCreateOneSchema: z.ZodType<Prisma.TeamCreateArgs> = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), data: z.union([TeamCreateInputObjectSchema, TeamUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TeamCreateArgs>;

export const TeamCreateOneZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), data: z.union([TeamCreateInputObjectSchema, TeamUncheckedCreateInputObjectSchema]) }).strict();