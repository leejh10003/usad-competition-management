import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamSelectObjectSchema as TeamSelectObjectSchema } from './objects/TeamSelect.schema';
import { TeamUpdateManyMutationInputObjectSchema as TeamUpdateManyMutationInputObjectSchema } from './objects/TeamUpdateManyMutationInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';

export const TeamUpdateManyAndReturnSchema: z.ZodType<Prisma.TeamUpdateManyAndReturnArgs> = z.object({ select: TeamSelectObjectSchema.optional(), data: TeamUpdateManyMutationInputObjectSchema, where: TeamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamUpdateManyAndReturnArgs>;

export const TeamUpdateManyAndReturnZodSchema = z.object({ select: TeamSelectObjectSchema.optional(), data: TeamUpdateManyMutationInputObjectSchema, where: TeamWhereInputObjectSchema.optional() }).strict();