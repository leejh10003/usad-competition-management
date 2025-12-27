import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachArgsObjectSchema as CoachArgsObjectSchema } from './CoachArgs.schema';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { CoachFindManySchema as CoachFindManySchema } from '../findManyCoach.schema';
import { TeamFindManySchema as TeamFindManySchema } from '../findManyTeam.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { SchoolCountOutputTypeArgsObjectSchema as SchoolCountOutputTypeArgsObjectSchema } from './SchoolCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  externalSchoolId: z.boolean().optional(),
  name: z.boolean().optional(),
  isVirtual: z.boolean().optional(),
  streetAddress: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zipCode: z.boolean().optional(),
  phone: z.boolean().optional(),
  principalName: z.boolean().optional(),
  principalEmail: z.boolean().optional(),
  objectiveScore: z.boolean().optional(),
  subjectiveScore: z.boolean().optional(),
  primaryCoachId: z.boolean().optional(),
  primaryCoach: z.union([z.boolean(), z.lazy(() => CoachArgsObjectSchema)]).optional(),
  emailDomain: z.boolean().optional(),
  division: z.boolean().optional(),
  competitionId: z.boolean().optional(),
  mutationIndex: z.boolean().optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  coaches: z.union([z.boolean(), z.lazy(() => CoachFindManySchema)]).optional(),
  teams: z.union([z.boolean(), z.lazy(() => TeamFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SchoolCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SchoolSelectObjectSchema: z.ZodType<Prisma.SchoolSelect> = makeSchema() as unknown as z.ZodType<Prisma.SchoolSelect>;
export const SchoolSelectObjectZodSchema = makeSchema();
