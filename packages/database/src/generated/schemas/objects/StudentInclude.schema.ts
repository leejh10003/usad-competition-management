import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsObjectSchema as TeamArgsObjectSchema } from './TeamArgs.schema';
import { SchoolArgsObjectSchema as SchoolArgsObjectSchema } from './SchoolArgs.schema';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema';
import { EventCheckInFindManySchema as EventCheckInFindManySchema } from '../findManyEventCheckIn.schema';
import { StudentCountOutputTypeArgsObjectSchema as StudentCountOutputTypeArgsObjectSchema } from './StudentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
  school: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional(),
  eventCheckIns: z.union([z.boolean(), z.lazy(() => EventCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StudentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StudentIncludeObjectSchema: z.ZodType<Prisma.StudentInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudentInclude>;
export const StudentIncludeObjectZodSchema = makeSchema();
