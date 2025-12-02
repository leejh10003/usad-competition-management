import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TeamCreateManyInputObjectSchema as TeamCreateManyInputObjectSchema } from './objects/TeamCreateManyInput.schema';

export const TeamCreateManySchema: z.ZodType<Prisma.TeamCreateManyArgs> = z.object({ data: z.union([ TeamCreateManyInputObjectSchema, z.array(TeamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TeamCreateManyArgs>;

export const TeamCreateManyZodSchema = z.object({ data: z.union([ TeamCreateManyInputObjectSchema, z.array(TeamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();