import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';

export const EventCheckInDeleteOneSchema: z.ZodType<Prisma.EventCheckInDeleteArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventCheckInDeleteArgs>;

export const EventCheckInDeleteOneZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema }).strict();