import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  state: StateSchema
}).strict();
export const CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateWithoutCompetitionInput>;
export const CompetitionAvailableStateCreateWithoutCompetitionInputObjectZodSchema = makeSchema();
