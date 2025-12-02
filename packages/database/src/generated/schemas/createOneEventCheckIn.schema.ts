import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInCreateInputObjectSchema as EventCheckInCreateInputObjectSchema } from './objects/EventCheckInCreateInput.schema';
import { EventCheckInUncheckedCreateInputObjectSchema as EventCheckInUncheckedCreateInputObjectSchema } from './objects/EventCheckInUncheckedCreateInput.schema';

export const EventCheckInCreateOneSchema: z.ZodType<Prisma.EventCheckInCreateArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), data: z.union([EventCheckInCreateInputObjectSchema, EventCheckInUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.EventCheckInCreateArgs>;

export const EventCheckInCreateOneZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), data: z.union([EventCheckInCreateInputObjectSchema, EventCheckInUncheckedCreateInputObjectSchema]) }).strict();