import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './objects/TeamCoachRelationshipWhereInput.schema';

export const TeamCoachRelationshipDeleteManySchema: z.ZodType<Prisma.TeamCoachRelationshipDeleteManyArgs> = z.object({ where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipDeleteManyArgs>;

export const TeamCoachRelationshipDeleteManyZodSchema = z.object({ where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict();