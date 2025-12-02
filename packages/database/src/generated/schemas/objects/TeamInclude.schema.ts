import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolArgsObjectSchema as SchoolArgsObjectSchema } from './SchoolArgs.schema';
import { TeamCoachRelationshipFindManySchema as TeamCoachRelationshipFindManySchema } from '../findManyTeamCoachRelationship.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { TeamCountOutputTypeArgsObjectSchema as TeamCountOutputTypeArgsObjectSchema } from './TeamCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  school: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  coachesRelationship: z.union([z.boolean(), z.lazy(() => TeamCoachRelationshipFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TeamCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TeamIncludeObjectSchema: z.ZodType<Prisma.TeamInclude> = makeSchema() as unknown as z.ZodType<Prisma.TeamInclude>;
export const TeamIncludeObjectZodSchema = makeSchema();
