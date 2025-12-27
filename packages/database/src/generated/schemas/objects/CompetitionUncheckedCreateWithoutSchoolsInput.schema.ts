import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedCreateWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedCreateWithoutSchoolsInput>;
export const CompetitionUncheckedCreateWithoutSchoolsInputObjectZodSchema = makeSchema();
