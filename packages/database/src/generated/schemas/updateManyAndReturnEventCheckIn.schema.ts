import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInUpdateManyMutationInputObjectSchema as EventCheckInUpdateManyMutationInputObjectSchema } from './objects/EventCheckInUpdateManyMutationInput.schema';
import { EventCheckInWhereInputObjectSchema as EventCheckInWhereInputObjectSchema } from './objects/EventCheckInWhereInput.schema';

export const EventCheckInUpdateManyAndReturnSchema: z.ZodType<Prisma.EventCheckInUpdateManyAndReturnArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), data: EventCheckInUpdateManyMutationInputObjectSchema, where: EventCheckInWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventCheckInUpdateManyAndReturnArgs>;

export const EventCheckInUpdateManyAndReturnZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), data: EventCheckInUpdateManyMutationInputObjectSchema, where: EventCheckInWhereInputObjectSchema.optional() }).strict();