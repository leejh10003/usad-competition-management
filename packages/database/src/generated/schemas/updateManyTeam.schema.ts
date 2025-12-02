import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamUpdateManyMutationInputObjectSchema as TeamUpdateManyMutationInputObjectSchema } from './objects/TeamUpdateManyMutationInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';

export const TeamUpdateManySchema: z.ZodType<Prisma.TeamUpdateManyArgs> = z.object({ data: TeamUpdateManyMutationInputObjectSchema, where: TeamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamUpdateManyArgs>;

export const TeamUpdateManyZodSchema = z.object({ data: TeamUpdateManyMutationInputObjectSchema, where: TeamWhereInputObjectSchema.optional() }).strict();