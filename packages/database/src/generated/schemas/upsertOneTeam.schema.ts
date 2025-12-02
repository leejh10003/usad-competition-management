import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamIncludeObjectSchema as TeamIncludeObjectSchema } from './objects/TeamInclude.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamCreateInputObjectSchema as TeamCreateInputObjectSchema } from './objects/TeamCreateInput.schema';
import { TeamUncheckedCreateInputObjectSchema as TeamUncheckedCreateInputObjectSchema } from './objects/TeamUncheckedCreateInput.schema';
import { TeamUpdateInputObjectSchema as TeamUpdateInputObjectSchema } from './objects/TeamUpdateInput.schema';
import { TeamUncheckedUpdateInputObjectSchema as TeamUncheckedUpdateInputObjectSchema } from './objects/TeamUncheckedUpdateInput.schema';

export const TeamUpsertOneSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), where: TeamWhereUniqueInputObjectSchema, create: z.union([ TeamCreateInputObjectSchema, TeamUncheckedCreateInputObjectSchema ]), update: z.union([ TeamUpdateInputObjectSchema, TeamUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TeamUpsertArgs>;

export const TeamUpsertOneZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), include: TeamIncludeObjectSchema.optional(), where: TeamWhereUniqueInputObjectSchema, create: z.union([ TeamCreateInputObjectSchema, TeamUncheckedCreateInputObjectSchema ]), update: z.union([ TeamUpdateInputObjectSchema, TeamUncheckedUpdateInputObjectSchema ]) }).strict();