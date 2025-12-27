import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInput.schema'

const makeSchema = () => z.object({
  state: StateSchema,
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInputObjectSchema)
}).strict();
export const CompetitionAvailableStateCreateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateInput>;
export const CompetitionAvailableStateCreateInputObjectZodSchema = makeSchema();
