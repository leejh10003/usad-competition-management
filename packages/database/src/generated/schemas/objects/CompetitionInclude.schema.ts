import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { CompetitionAvailableStateFindManySchema as CompetitionAvailableStateFindManySchema } from '../findManyCompetitionAvailableState.schema';
import { SchoolFindManySchema as SchoolFindManySchema } from '../findManySchool.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { CompetitionCountOutputTypeArgsObjectSchema as CompetitionCountOutputTypeArgsObjectSchema } from './CompetitionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  competitionAvailableStates: z.union([z.boolean(), z.lazy(() => CompetitionAvailableStateFindManySchema)]).optional(),
  schools: z.union([z.boolean(), z.lazy(() => SchoolFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompetitionIncludeObjectSchema: z.ZodType<Prisma.CompetitionInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionInclude>;
export const CompetitionIncludeObjectZodSchema = makeSchema();
