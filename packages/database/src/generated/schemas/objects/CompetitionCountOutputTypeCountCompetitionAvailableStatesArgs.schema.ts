import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './CompetitionAvailableStateWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).optional()
}).strict();
export const CompetitionCountOutputTypeCountCompetitionAvailableStatesArgsObjectSchema = makeSchema();
export const CompetitionCountOutputTypeCountCompetitionAvailableStatesArgsObjectZodSchema = makeSchema();
