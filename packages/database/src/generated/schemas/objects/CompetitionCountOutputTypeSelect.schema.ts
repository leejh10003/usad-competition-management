import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCountOutputTypeCountEventsArgsObjectSchema as CompetitionCountOutputTypeCountEventsArgsObjectSchema } from './CompetitionCountOutputTypeCountEventsArgs.schema';
import { CompetitionCountOutputTypeCountCompetitionAvailableStatesArgsObjectSchema as CompetitionCountOutputTypeCountCompetitionAvailableStatesArgsObjectSchema } from './CompetitionCountOutputTypeCountCompetitionAvailableStatesArgs.schema';
import { CompetitionCountOutputTypeCountSchoolsArgsObjectSchema as CompetitionCountOutputTypeCountSchoolsArgsObjectSchema } from './CompetitionCountOutputTypeCountSchoolsArgs.schema';
import { CompetitionCountOutputTypeCountStudentsArgsObjectSchema as CompetitionCountOutputTypeCountStudentsArgsObjectSchema } from './CompetitionCountOutputTypeCountStudentsArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeCountEventsArgsObjectSchema)]).optional(),
  competitionAvailableStates: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeCountCompetitionAvailableStatesArgsObjectSchema)]).optional(),
  schools: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeCountSchoolsArgsObjectSchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeCountStudentsArgsObjectSchema)]).optional()
}).strict();
export const CompetitionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CompetitionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCountOutputTypeSelect>;
export const CompetitionCountOutputTypeSelectObjectZodSchema = makeSchema();
