import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema as EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './EventCheckInUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  competitionId: z.string(),
  eventCheckIn: z.lazy(() => EventCheckInUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateInput>;
export const EventUncheckedCreateInputObjectZodSchema = makeSchema();
