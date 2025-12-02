import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipUpdateManyMutationInputObjectSchema as TeamCoachRelationshipUpdateManyMutationInputObjectSchema } from './objects/TeamCoachRelationshipUpdateManyMutationInput.schema';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './objects/TeamCoachRelationshipWhereInput.schema';

export const TeamCoachRelationshipUpdateManySchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyArgs> = z.object({ data: TeamCoachRelationshipUpdateManyMutationInputObjectSchema, where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyArgs>;

export const TeamCoachRelationshipUpdateManyZodSchema = z.object({ data: TeamCoachRelationshipUpdateManyMutationInputObjectSchema, where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict();