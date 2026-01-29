import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RelativeEventsSchema } from '../enums/RelativeEvents.schema';
import { EventCheckInCreateNestedManyWithoutEventInputObjectSchema as EventCheckInCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  mutationIndex: z.number().int(),
  type: RelativeEventsSchema,
  eventCheckIn: z.lazy(() => EventCheckInCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutCompetitionInput>;
export const EventCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
