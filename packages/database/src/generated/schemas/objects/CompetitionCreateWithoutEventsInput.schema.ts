import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { SchoolCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolCreateNestedManyWithoutCompetitionInput.schema';
import { StudentCreateNestedManyWithoutCompetitionInputObjectSchema as StudentCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  state: StateSchema.optional().nullable(),
  mutationIndex: z.number().int(),
  schools: z.lazy(() => SchoolCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateWithoutEventsInput>;
export const CompetitionCreateWithoutEventsInputObjectZodSchema = makeSchema();
