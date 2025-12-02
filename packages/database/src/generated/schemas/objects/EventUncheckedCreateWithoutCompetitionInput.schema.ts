import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema as EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  eventCheckIn: z.lazy(() => EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutCompetitionInput>;
export const EventUncheckedCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
