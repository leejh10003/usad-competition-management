import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamCreateManyInputObjectSchema as TeamCreateManyInputObjectSchema } from './objects/TeamCreateManyInput.schema';

export const TeamCreateManyAndReturnSchema: z.ZodType<Prisma.TeamCreateManyAndReturnArgs> = z.object({ select: TeamSelectObjectSchema.optional(), data: z.union([ TeamCreateManyInputObjectSchema, z.array(TeamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TeamCreateManyAndReturnArgs>;

export const TeamCreateManyAndReturnZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), data: z.union([ TeamCreateManyInputObjectSchema, z.array(TeamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();