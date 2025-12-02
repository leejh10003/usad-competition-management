import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInUpdateManyMutationInputObjectSchema as EventCheckInUpdateManyMutationInputObjectSchema } from './objects/EventCheckInUpdateManyMutationInput.schema';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './objects/EventCheckInWhereInput.schema';

export const EventCheckInUpdateManySchema: z.ZodType<Prisma.EventCheckInUpdateManyArgs> = z.object({ data: EventCheckInUpdateManyMutationInputObjectSchema, where: EventCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyArgs>;

export const EventCheckInUpdateManyZodSchema = z.object({ data: EventCheckInUpdateManyMutationInputObjectSchema, where: EventCheckInWhereInputObjectSchema.optional() }).strict();