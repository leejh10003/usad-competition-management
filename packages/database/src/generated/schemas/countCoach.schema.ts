import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachOrderByWithRelationInputObjectSchema as CoachOrderByWithRelationInputObjectSchema } from './objects/CoachOrderByWithRelationInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './objects/CoachWhereInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './objects/CoachWhereUniqueInput.schema';
import { CoachCountAggregateInputObjectSchema as CoachCountAggregateInputObjectSchema } from './objects/CoachCountAggregateInput.schema';

export const CoachCountSchema: z.ZodType<Prisma.CoachCountArgs> = z.object({ orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CoachCountArgs>;

export const CoachCountZodSchema = z.object({ orderBy: z.union([CoachOrderByWithRelationInputObjectSchema, CoachOrderByWithRelationInputObjectSchema.array()]).optional(), where: CoachWhereInputObjectSchema.optional(), cursor: CoachWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CoachCountAggregateInputObjectSchema ]).optional() }).strict();