import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachOrderByWithRelationInputObjectSchema as CoachOrderByWithRelationInputObjectSchema } from './objects/CoachOrderByWithRelationInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';
import { CoachCountAggregateInputObjectSchema as CoachCountAggregateInputObjectSchema } from './objects/CoachCountAggregateInput.schema';
import { CoachMinAggregateInputObjectSchema as CoachMinAggregateInputObjectSchema } from './objects/CoachMinAggregateInput.schema';
import { CoachMaxAggregateInputObjectSchema as CoachMaxAggregateInputObjectSchema } from './objects/CoachMaxAggregateInput.schema';
import { CoachAvgAggregateInputObjectSchema as CoachAvgAggregateInputObjectSchema } from './objects/CoachAvgAggregateInput.schema';
import { CoachSumAggregateInputObjectSchema as CoachSumAggregateInputObjectSchema } from './objects/CoachSumAggregateInput.schema';

export const CoachAggregateSchema: z.ZodType<Prisma.CoachAggregateArgs> = z.object({ orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional(), _min: CoachMinAggregateInputObjectSchema.optional(), _max: CoachMaxAggregateInputObjectSchema.optional(), _avg: CoachAvgAggregateInputObjectSchema.optional(), _sum: CoachSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoachAggregateArgs>;

export const CoachAggregateZodSchema = z.object({ orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional(), _min: CoachMinAggregateInputObjectSchema.optional(), _max: CoachMaxAggregateInputObjectSchema.optional(), _avg: CoachAvgAggregateInputObjectSchema.optional(), _sum: CoachSumAggregateInputObjectSchema.optional() }).strict();