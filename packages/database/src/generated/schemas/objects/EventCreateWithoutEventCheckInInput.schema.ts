import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateNestedOneWithoutEventsInputObjectSchema as CompetitionCreateNestedOneWithoutEventsInputObjectSchema } from './CompetitionCreateNestedOneWithoutEventsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutEventsInputObjectSchema)
}).strict();
export const EventCreateWithoutEventCheckInInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutEventCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutEventCheckInInput>;
export const EventCreateWithoutEventCheckInInputObjectZodSchema = makeSchema();
