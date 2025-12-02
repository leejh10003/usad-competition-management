import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateNestedOneWithoutEventsInputObjectSchema as CompetitionCreateNestedOneWithoutEventsInputObjectSchema } from './CompetitionCreateNestedOneWithoutEventsInput.schema';
import { EventCheckInCreateNestedManyWithoutEventInputObjectSchema as EventCheckInCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutEventsInputObjectSchema),
  eventCheckIn: z.lazy(() => EventCheckInCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateInputObjectSchema: z.ZodType<Prisma.EventCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateInput>;
export const EventCreateInputObjectZodSchema = makeSchema();
