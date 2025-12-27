import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  state: StateSchema
}).strict();
export const CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput>;
export const CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
