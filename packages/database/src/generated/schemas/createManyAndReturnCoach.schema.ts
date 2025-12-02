import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CoachSelectObjectSchema as CoachSelectObjectSchema } from './objects/CoachSelect.schema';
import { CoachCreateManyInputObjectSchema as CoachCreateManyInputObjectSchema } from './objects/CoachCreateManyInput.schema';

export const CoachCreateManyAndReturnSchema: z.ZodType<Prisma.CoachCreateManyAndReturnArgs> = z.object({ select: CoachSelectObjectSchema.optional(), data: z.union([ CoachCreateManyInputObjectSchema, z.array(CoachCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CoachCreateManyAndReturnArgs>;

export const CoachCreateManyAndReturnZodSchema = z.object({ select: CoachSelectObjectSchema.optional(), data: z.union([ CoachCreateManyInputObjectSchema, z.array(CoachCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();