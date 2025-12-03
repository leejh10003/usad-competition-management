import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInCreateNestedManyWithoutEventInputObjectSchema as EventCheckInCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  eventCheckIn: z.lazy(() => EventCheckInCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutCompetitionInput>;
export const EventCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
