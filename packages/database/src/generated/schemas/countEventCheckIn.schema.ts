import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInOrderByWithRelationInputObjectSchema as EventCheckInOrderByWithRelationInputObjectSchema } from './objects/EventCheckInOrderByWithRelationInput.schema';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './objects/EventCheckInWhereInput.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';
import { EventCheckInCountAggregateInputObjectSchema as EventCheckInCountAggregateInputObjectSchema } from './objects/EventCheckInCountAggregateInput.schema';

export const EventCheckInCountSchema: z.ZodType<Prisma.EventCheckInCountArgs> = z.object({ orderBy: z.union([EventCheckInOrderByWithRelationInputObjectSchema, EventCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventCheckInWhereInputObjectSchema.optional(), cursor: EventCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCheckInCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInCountArgs>;

export const EventCheckInCountZodSchema = z.object({ orderBy: z.union([EventCheckInOrderByWithRelationInputObjectSchema, EventCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventCheckInWhereInputObjectSchema.optional(), cursor: EventCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EventCheckInCountAggregateInputObjectSchema ]).optional() }).strict();