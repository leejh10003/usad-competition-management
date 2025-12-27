import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  competitionId: z.string(),
  state: StateSchema
}).strict();
export const CompetitionAvailableStateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateInput>;
export const CompetitionAvailableStateUncheckedCreateInputObjectZodSchema = makeSchema();
