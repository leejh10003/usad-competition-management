import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateNestedManyWithoutCompetitionInputObjectSchema as EventCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateNestedManyWithoutCompetitionInput.schema';
import { SchoolCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolCreateNestedManyWithoutCompetitionInput.schema';
import { StudentCreateNestedManyWithoutCompetitionInputObjectSchema as StudentCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  mutationIndex: z.number().int(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  competitionAvailableStates: z.lazy(() => CompetitionAvailableStateCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  schools: z.lazy(() => SchoolCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionCreateInputObjectSchema: z.ZodType<Prisma.CompetitionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateInput>;
export const CompetitionCreateInputObjectZodSchema = makeSchema();
