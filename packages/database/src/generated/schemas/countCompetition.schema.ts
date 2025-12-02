import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './objects/CompetitionOrderByWithRelationInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './objects/CompetitionWhereInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './objects/CompetitionWhereUniqueInput.schema';
import { CompetitionCountAggregateInputObjectSchema as CompetitionCountAggregateInputObjectSchema } from './objects/CompetitionCountAggregateInput.schema';

export const CompetitionCountSchema: z.ZodType<Prisma.CompetitionCountArgs> = z.object({ orderBy: z.union([CompetitionOrderByWithRelationInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionWhereInputObjectSchema.optional(), cursor: CompetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompetitionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CompetitionCountArgs>;

export const CompetitionCountZodSchema = z.object({ orderBy: z.union([CompetitionOrderByWithRelationInputObjectSchema, CompetitionOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompetitionWhereInputObjectSchema.optional(), cursor: CompetitionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CompetitionCountAggregateInputObjectSchema ]).optional() }).strict();