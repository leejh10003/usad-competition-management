import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';
import { CoachOrderByWithAggregationInputObjectSchema as CoachOrderByWithAggregationInputObjectSchema } from './objects/CoachOrderByWithAggregationInput.schema';
import { CoachScalarWhereWithAggregatesInputObjectSchema as CoachScalarWhereWithAggregatesInputObjectSchema } from './objects/CoachScalarWhereWithAggregatesInput.schema';
import { CoachScalarFieldEnumSchema } from './enums/CoachScalarFieldEnum.schema';
import { CoachCountAggregateInputObjectSchema as CoachCountAggregateInputObjectSchema } from './objects/CoachCountAggregateInput.schema';
import { CoachMinAggregateInputObjectSchema as CoachMinAggregateInputObjectSchema } from './objects/CoachMinAggregateInput.schema';
import { CoachMaxAggregateInputObjectSchema as CoachMaxAggregateInputObjectSchema } from './objects/CoachMaxAggregateInput.schema';
import { CoachAvgAggregateInputObjectSchema as CoachAvgAggregateInputObjectSchema } from './objects/CoachAvgAggregateInput.schema';
import { CoachSumAggregateInputObjectSchema as CoachSumAggregateInputObjectSchema } from './objects/CoachSumAggregateInput.schema';

export const CoachGroupBySchema: z.ZodType<Prisma.CoachGroupByArgs> = z.object({ where: CoachWhereInputObjectSchema.optional(), orderBy: z.union([CoachOrderByWithAggregationInputObjectSchema, CoachOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CoachScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CoachScalarFieldEnumSchema), _count: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional(), _min: CoachMinAggregateInputObjectSchema.optional(), _max: CoachMaxAggregateInputObjectSchema.optional(), _avg: CoachAvgAggregateInputObjectSchema.optional(), _sum: CoachSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CoachGroupByArgs>;

export const CoachGroupByZodSchema = z.object({ where: CoachWhereInputObjectSchema.optional(), orderBy: z.union([CoachOrderByWithAggregationInputObjectSchema, CoachOrderByWithAggregationInputObjectSchema.array()]).optional(), having: CoachScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(CoachScalarFieldEnumSchema), _count: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional(), _min: CoachMinAggregateInputObjectSchema.optional(), _max: CoachMaxAggregateInputObjectSchema.optional(), _avg: CoachAvgAggregateInputObjectSchema.optional(), _sum: CoachSumAggregateInputObjectSchema.optional() }).strict();