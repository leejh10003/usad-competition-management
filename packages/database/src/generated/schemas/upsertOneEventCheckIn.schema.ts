import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';
import { EventCheckInCreateInputObjectSchema as EventCheckInCreateInputObjectSchema } from './objects/EventCheckInCreateInput.schema';
import { EventCheckInUncheckedCreateInputObjectSchema as EventCheckInUncheckedCreateInputObjectSchema } from './objects/EventCheckInUncheckedCreateInput.schema';
import { EventCheckInUpdateInputObjectSchema as EventCheckInUpdateInputObjectSchema } from './objects/EventCheckInUpdateInput.schema';
import { EventCheckInUncheckedUpdateInputObjectSchema as EventCheckInUncheckedUpdateInputObjectSchema } from './objects/EventCheckInUncheckedUpdateInput.schema';

export const EventCheckInUpsertOneSchema: z.ZodType<Prisma.EventCheckInUpsertArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema, create: z.union([ EventCheckInCreateInputObjectSchema, EventCheckInUncheckedCreateInputObjectSchema ]), update: z.union([ EventCheckInUpdateInputObjectSchema, EventCheckInUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EventCheckInUpsertArgs>;

export const EventCheckInUpsertOneZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema, create: z.union([ EventCheckInCreateInputObjectSchema, EventCheckInUncheckedCreateInputObjectSchema ]), update: z.union([ EventCheckInUpdateInputObjectSchema, EventCheckInUncheckedUpdateInputObjectSchema ]) }).strict();