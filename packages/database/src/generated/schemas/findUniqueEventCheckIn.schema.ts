import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { EventCheckInSelectObjectSchema as EventCheckInSelectObjectSchema } from './objects/EventCheckInSelect.schema';
import { EventCheckInIncludeObjectSchema as EventCheckInIncludeObjectSchema } from './objects/EventCheckInInclude.schema';
import { EventCheckInWhereUniqueInputObjectSchema as EventCheckInWhereUniqueInputObjectSchema } from './objects/EventCheckInWhereUniqueInput.schema';

export const EventCheckInFindUniqueSchema: z.ZodType<Prisma.EventCheckInFindUniqueArgs> = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.EventCheckInFindUniqueArgs>;

export const EventCheckInFindUniqueZodSchema = z.object({ select: EventCheckInSelectObjectSchema.optional(), include: EventCheckInIncludeObjectSchema.optional(), where: EventCheckInWhereUniqueInputObjectSchema }).strict();