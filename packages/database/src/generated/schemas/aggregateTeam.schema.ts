import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamOrderByWithRelationInputObjectSchema as TeamOrderByWithRelationInputObjectSchema } from './objects/TeamOrderByWithRelationInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './objects/TeamWhereUniqueInput.schema';
import { TeamCountAggregateInputObjectSchema as TeamCountAggregateInputObjectSchema } from './objects/TeamCountAggregateInput.schema';
import { TeamMinAggregateInputObjectSchema as TeamMinAggregateInputObjectSchema } from './objects/TeamMinAggregateInput.schema';
import { TeamMaxAggregateInputObjectSchema as TeamMaxAggregateInputObjectSchema } from './objects/TeamMaxAggregateInput.schema';
import { TeamAvgAggregateInputObjectSchema as TeamAvgAggregateInputObjectSchema } from './objects/TeamAvgAggregateInput.schema';
import { TeamSumAggregateInputObjectSchema as TeamSumAggregateInputObjectSchema } from './objects/TeamSumAggregateInput.schema';

export const TeamAggregateSchema: z.ZodType<Prisma.TeamAggregateArgs> = z.object({ orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional(), _min: TeamMinAggregateInputObjectSchema.optional(), _max: TeamMaxAggregateInputObjectSchema.optional(), _avg: TeamAvgAggregateInputObjectSchema.optional(), _sum: TeamSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamAggregateArgs>;

export const TeamAggregateZodSchema = z.object({ orderBy: z.union([TeamOrderByWithRelationInputObjectSchema, TeamOrderByWithRelationInputObjectSchema.array()]).optional(), where: TeamWhereInputObjectSchema.optional(), cursor: TeamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional(), _min: TeamMinAggregateInputObjectSchema.optional(), _max: TeamMaxAggregateInputObjectSchema.optional(), _avg: TeamAvgAggregateInputObjectSchema.optional(), _sum: TeamSumAggregateInputObjectSchema.optional() }).strict();