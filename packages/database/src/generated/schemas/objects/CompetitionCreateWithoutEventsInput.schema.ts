import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreatenonRelativeEventsInputObjectSchema as CompetitionCreatenonRelativeEventsInputObjectSchema } from './CompetitionCreatenonRelativeEventsInput.schema';
import { NonRelativeEventsSchema } from '../enums/NonRelativeEvents.schema';
import { StateSchema } from '../enums/State.schema';
import { CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateNestedManyWithoutCompetitionInput.schema';
import { SchoolCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolCreateNestedManyWithoutCompetitionInput.schema';
import { StudentCreateNestedManyWithoutCompetitionInputObjectSchema as StudentCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentCreateNestedManyWithoutCompetitionInput.schema'

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
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateWithoutEventsInput>;
export const CompetitionCreateWithoutEventsInputObjectZodSchema = makeSchema();
