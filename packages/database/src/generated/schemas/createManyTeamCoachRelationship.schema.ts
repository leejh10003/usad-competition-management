import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCoachRelationshipCreateManyInputObjectSchema as TeamCoachRelationshipCreateManyInputObjectSchema } from './objects/TeamCoachRelationshipCreateManyInput.schema';

export const TeamCoachRelationshipCreateManySchema: z.ZodType<Prisma.TeamCoachRelationshipCreateManyArgs> = z.object({ data: z.union([ TeamCoachRelationshipCreateManyInputObjectSchema, z.array(TeamCoachRelationshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TeamCoachRelationshipCreateManyArgs>;

export const TeamCoachRelationshipCreateManyZodSchema = z.object({ data: z.union([ TeamCoachRelationshipCreateManyInputObjectSchema, z.array(TeamCoachRelationshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();