import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema'

const makeSchema = () => z.object({
  competitionId: z.string(),
  state: StateSchema
}).strict();
export const CompetitionAvailableStateCreateManyInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateManyInput>;
export const CompetitionAvailableStateCreateManyInputObjectZodSchema = makeSchema();
