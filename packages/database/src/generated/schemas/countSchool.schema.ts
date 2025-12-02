import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './objects/SchoolOrderByWithRelationInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './objects/SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './objects/SchoolWhereUniqueInput.schema';
import { SchoolCountAggregateInputObjectSchema as SchoolCountAggregateInputObjectSchema } from './objects/SchoolCountAggregateInput.schema';

export const SchoolCountSchema: z.ZodType<Prisma.SchoolCountArgs> = z.object({ orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SchoolCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SchoolCountArgs>;

export const SchoolCountZodSchema = z.object({ orderBy: z.union([SchoolOrderByWithRelationInputObjectSchema, SchoolOrderByWithRelationInputObjectSchema.array()]).optional(), where: SchoolWhereInputObjectSchema.optional(), cursor: SchoolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SchoolCountAggregateInputObjectSchema ]).optional() }).strict();