import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './objects/TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipUpdateManyMutationInputObjectSchema as TeamCoachRelationshipUpdateManyMutationInputObjectSchema } from './objects/TeamCoachRelationshipUpdateManyMutationInput.schema';
import { TeamCoachRelationshipWhereInputObjectSchema as TeamCoachRelationshipWhereInputObjectSchema } from './objects/TeamCoachRelationshipWhereInput.schema';

export const TeamCoachRelationshipUpdateManyAndReturnSchema: z.ZodType<Prisma.TeamCoachRelationshipUpdateManyAndReturnArgs> = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), data: TeamCoachRelationshipUpdateManyMutationInputObjectSchema, where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUpdateManyAndReturnArgs>;

export const TeamCoachRelationshipUpdateManyAndReturnZodSchema = z.object({ select: TeamCoachRelationshipSelectObjectSchema.optional(), data: TeamCoachRelationshipUpdateManyMutationInputObjectSchema, where: TeamCoachRelationshipWhereInputObjectSchema.optional() }).strict();