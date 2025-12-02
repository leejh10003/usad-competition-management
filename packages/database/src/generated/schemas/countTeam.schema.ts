import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamOrderByWithRelationInputObjectSchema as TeamOrderByWithRelationInputObjectSchema } from './objects/TeamOrderByWithRelationInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamCountAggregateInputObjectSchema as TeamCountAggregateInputObjectSchema } from './objects/TeamCountAggregateInput.schema';

export const TeamCountSchema: z.ZodType<Prisma.TeamCountArgs> = z.object({ orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TeamCountArgs>;

export const TeamCountZodSchema = z.object({ orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional() }).strict();