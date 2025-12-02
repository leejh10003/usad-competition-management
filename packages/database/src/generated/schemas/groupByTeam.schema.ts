import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './objects/TeamWhereInput.schema';
import { TeamOrderByWithAggregationInputObjectSchema as TeamOrderByWithAggregationInputObjectSchema } from './objects/TeamOrderByWithAggregationInput.schema';
import { TeamScalarWhereWithAggregatesInputObjectSchema as TeamScalarWhereWithAggregatesInputObjectSchema } from './objects/TeamScalarWhereWithAggregatesInput.schema';
import { TeamScalarFieldEnumSchema } from './enums/TeamScalarFieldEnum.schema';
import { TeamCountAggregateInputObjectSchema as TeamCountAggregateInputObjectSchema } from './objects/TeamCountAggregateInput.schema';
import { TeamMinAggregateInputObjectSchema as TeamMinAggregateInputObjectSchema } from './objects/TeamMinAggregateInput.schema';
import { TeamMaxAggregateInputObjectSchema as TeamMaxAggregateInputObjectSchema } from './objects/TeamMaxAggregateInput.schema';
import { TeamAvgAggregateInputObjectSchema as TeamAvgAggregateInputObjectSchema } from './objects/TeamAvgAggregateInput.schema';
import { TeamSumAggregateInputObjectSchema as TeamSumAggregateInputObjectSchema } from './objects/TeamSumAggregateInput.schema';

export const TeamGroupBySchema: z.ZodType<Prisma.TeamGroupByArgs> = z.object({ where: TeamWhereInputObjectSchema.optional(), orderBy: z.union([TeamOrderByWithAggregationInputObjectSchema, TeamOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TeamScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TeamScalarFieldEnumSchema), _count: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional(), _min: TeamMinAggregateInputObjectSchema.optional(), _max: TeamMaxAggregateInputObjectSchema.optional(), _avg: TeamAvgAggregateInputObjectSchema.optional(), _sum: TeamSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TeamGroupByArgs>;

export const TeamGroupByZodSchema = z.object({ where: TeamWhereInputObjectSchema.optional(), orderBy: z.union([TeamOrderByWithAggregationInputObjectSchema, TeamOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TeamScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TeamScalarFieldEnumSchema), _count: z.union([ z.literal(true), TeamCountAggregateInputObjectSchema ]).optional(), _min: TeamMinAggregateInputObjectSchema.optional(), _max: TeamMaxAggregateInputObjectSchema.optional(), _avg: TeamAvgAggregateInputObjectSchema.optional(), _sum: TeamSumAggregateInputObjectSchema.optional() }).strict();