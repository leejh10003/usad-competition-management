import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsObjectSchema as TeamArgsObjectSchema } from './TeamArgs.schema';
import { SchoolArgsObjectSchema as SchoolArgsObjectSchema } from './SchoolArgs.schema';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { EventCheckInFindManySchema as EventCheckInFindManySchema } from '../findManyEventCheckIn.schema';
import { StudentCountOutputTypeArgsObjectSchema as StudentCountOutputTypeArgsObjectSchema } from './StudentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  externalStudentId: z.boolean().optional(),
  division: z.boolean().optional(),
  gpa: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  usadPin: z.boolean().optional(),
  signature: z.boolean().optional(),
  attachmentOnRegistering: z.boolean().optional(),
  streetAddress: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zipCode: z.boolean().optional(),
  guardianFirstName: z.boolean().optional(),
  guardianLastName: z.boolean().optional(),
  guardianPhone: z.boolean().optional(),
  guardianEmail: z.boolean().optional(),
  mutationIndex: z.boolean().optional(),
  objectiveScore: z.boolean().optional(),
  subjectiveScore: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
  schoolId: z.boolean().optional(),
  school: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  competitionId: z.boolean().optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  eventCheckIns: z.union([z.boolean(), z.lazy(() => EventCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudentSelectObjectSchema: z.ZodType<Prisma.StudentSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudentSelect>;
export const StudentSelectObjectZodSchema = makeSchema();
