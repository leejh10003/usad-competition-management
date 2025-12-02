import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { EventCreateNestedManyWithoutCompetitionInputObjectSchema as EventCreateNestedManyWithoutCompetitionInputObjectSchema } from './EventCreateNestedManyWithoutCompetitionInput.schema';
import { StudentCreateNestedManyWithoutCompetitionInputObjectSchema as StudentCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  state: StateSchema.optional().nullable(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionCreateWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateWithoutSchoolsInput>;
export const CompetitionCreateWithoutSchoolsInputObjectZodSchema = makeSchema();
