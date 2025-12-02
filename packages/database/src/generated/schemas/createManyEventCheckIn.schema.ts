import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInCreateManyInputObjectSchema as EventCheckInCreateManyInputObjectSchema } from './objects/EventCheckInCreateManyInput.schema';

export const EventCheckInCreateManySchema: z.ZodType<Prisma.EventCheckInCreateManyArgs> = z.object({ data: z.union([ EventCheckInCreateManyInputObjectSchema, z.array(EventCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInCreateManyArgs>;

export const EventCheckInCreateManyZodSchema = z.object({ data: z.union([ EventCheckInCreateManyInputObjectSchema, z.array(EventCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();