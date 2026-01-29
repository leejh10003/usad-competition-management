import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreatenonRelativeEventsInputObjectSchema as CompetitionCreatenonRelativeEventsInputObjectSchema } from './CompetitionCreatenonRelativeEventsInput.schema';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema';
import { StateSchema } from '../enums/State.schema';
import { EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  round: z.number().int(),
  nonRelativeEvents: z.union([z.lazy(() => CompetitionCreatenonRelativeEventsInputObjectSchema), NonRelativeEventsSchema.array()]).optional(),
  streetAddress: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: StateSchema.optional().nullable(),
  zipCode: z.string().optional().nullable(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedCreateWithoutStudentsInput>;
export const CompetitionUncheckedCreateWithoutStudentsInputObjectZodSchema = makeSchema();
