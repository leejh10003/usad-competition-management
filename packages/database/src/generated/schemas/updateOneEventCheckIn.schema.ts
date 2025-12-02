import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInUpdateInputObjectSchema as EventCheckInUpdateInputObjectSchema } from './objects/EventCheckInUpdateInput.schema';
import { EventCheckInUncheckedUpdateInputObjectSchema as EventCheckInUncheckedUpdateInputObjectSchema } from './objects/EventCheckInUncheckedUpdateInput.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';

export const EventCheckInUpdateOneSchema: z.ZodType<Prisma.EventCheckInUpdateArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), data: z.union([EventCheckInUpdateInputObjectSchema, EventCheckInUncheckedUpdateInputObjectSchema]), where: EventCheckInWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventCheckInUpdateArgs>;

export const EventCheckInUpdateOneZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), data: z.union([EventCheckInUpdateInputObjectSchema, EventCheckInUncheckedUpdateInputObjectSchema]), where: EventCheckInWhereUniqueInputObjectSchema }).strict();