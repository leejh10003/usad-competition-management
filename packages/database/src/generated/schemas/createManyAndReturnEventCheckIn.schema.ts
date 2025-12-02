import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInCreateManyInputObjectSchema as EventCheckInCreateManyInputObjectSchema } from './objects/EventCheckInCreateManyInput.schema';

export const EventCheckInCreateManyAndReturnSchema: z.ZodType<Prisma.EventCheckInCreateManyAndReturnArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), data: z.union([ EventCheckInCreateManyInputObjectSchema, z.array(EventCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInCreateManyAndReturnArgs>;

export const EventCheckInCreateManyAndReturnZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), data: z.union([ EventCheckInCreateManyInputObjectSchema, z.array(EventCheckInCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();