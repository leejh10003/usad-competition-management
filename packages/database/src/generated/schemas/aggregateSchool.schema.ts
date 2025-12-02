import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './objects/SchoolOrderByWithRelationInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolCountAggregateInputObjectSchema as SchoolCountAggregateInputObjectSchema } from './objects/SchoolCountAggregateInput.schema';
import { SchoolMinAggregateInputObjectSchema as SchoolMinAggregateInputObjectSchema } from './objects/SchoolMinAggregateInput.schema';
import { SchoolMaxAggregateInputObjectSchema as SchoolMaxAggregateInputObjectSchema } from './objects/SchoolMaxAggregateInput.schema';
import { SchoolAvgAggregateInputObjectSchema as SchoolAvgAggregateInputObjectSchema } from './objects/SchoolAvgAggregateInput.schema';
import { SchoolSumAggregateInputObjectSchema as SchoolSumAggregateInputObjectSchema } from './objects/SchoolSumAggregateInput.schema';

export const SchoolAggregateSchema: z.ZodType<Prisma.SchoolAggregateArgs> = z.object({ orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SchoolCountAggregateInputObjectSchema ]).optional(), _min: SchoolMinAggregateInputObjectSchema.optional(), _max: SchoolMaxAggregateInputObjectSchema.optional(), _avg: SchoolAvgAggregateInputObjectSchema.optional(), _sum: SchoolSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SchoolAggregateArgs>;

export const SchoolAggregateZodSchema = z.object({ orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SchoolCountAggregateInputObjectSchema ]).optional(), _min: SchoolMinAggregateInputObjectSchema.optional(), _max: SchoolMaxAggregateInputObjectSchema.optional(), _avg: SchoolAvgAggregateInputObjectSchema.optional(), _sum: SchoolSumAggregateInputObjectSchema.optional() }).strict();