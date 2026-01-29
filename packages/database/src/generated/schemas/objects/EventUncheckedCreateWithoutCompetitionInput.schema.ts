import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema as EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  mutationIndex: z.number().int(),
  type: RelativeEventsSchema,
  eventCheckIn: z.lazy(() => EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutCompetitionInput>;
export const EventUncheckedCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
