import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema as StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateNestedManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  state: StateSchema.optional().nullable(),
  mutationIndex: z.number().int(),
  schools: z.lazy(() => SchoolUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema).optional()
}).strict();
export const CompetitionUncheckedCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.CompetitionUncheckedCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUncheckedCreateWithoutEventsInput>;
export const CompetitionUncheckedCreateWithoutEventsInputObjectZodSchema = makeSchema();
