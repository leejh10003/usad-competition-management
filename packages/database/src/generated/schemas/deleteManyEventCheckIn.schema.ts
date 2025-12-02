import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './objects/EventCheckInWhereInput.schema';

export const EventCheckInDeleteManySchema: z.ZodType<Prisma.EventCheckInDeleteManyArgs> = z.object({ where: EventCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInDeleteManyArgs>;

export const EventCheckInDeleteManyZodSchema = z.object({ where: EventCheckInWhereInputObjectSchema.optional() }).strict();