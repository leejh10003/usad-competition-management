import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';

export const TeamDeleteManySchema: z.ZodType<Prisma.TeamDeleteManyArgs> = z.object({ where: TeamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamDeleteManyArgs>;

export const TeamDeleteManyZodSchema = z.object({ where: TeamWhereInputObjectSchema.optional() }).strict();