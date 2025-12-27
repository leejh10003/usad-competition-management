import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedCreateInput>;
export const CompetitionUncheckedCreateInputObjectZodSchema = makeSchema();
