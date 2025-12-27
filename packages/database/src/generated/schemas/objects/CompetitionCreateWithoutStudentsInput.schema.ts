import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateNestedManyWithoutCompetitionInputObjectSchema as EventCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateNestedManyWithoutCompetitionInput.schema';
import { SchoolCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionCreateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateWithoutStudentsInput>;
export const CompetitionCreateWithoutStudentsInputObjectZodSchema = makeSchema();
