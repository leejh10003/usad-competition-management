import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachArgsObjectSchema as CoachArgsObjectSchema } from './CoachArgs.schema';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { CoachFindManySchema as CoachFindManySchema } from '../findManyCoach.schema';
import { TeamFindManySchema as TeamFindManySchema } from '../findManyTeam.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { SchoolCountOutputTypeArgsObjectSchema as SchoolCountOutputTypeArgsObjectSchema } from './SchoolCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  primaryCoach: z.union([z.boolean(), z.lazy(() => CoachArgsObjectSchema)]).optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  coaches: z.union([z.boolean(), z.lazy(() => CoachFindManySchema)]).optional(),
  teams: z.union([z.boolean(), z.lazy(() => TeamFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SchoolCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SchoolIncludeObjectSchema: z.ZodType<Prisma.SchoolInclude> = makeSchema() as unknown as z.ZodType<Prisma.SchoolInclude>;
export const SchoolIncludeObjectZodSchema = makeSchema();
