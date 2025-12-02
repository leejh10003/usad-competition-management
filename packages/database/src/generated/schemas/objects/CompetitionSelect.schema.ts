import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { SchoolFindManySchema as SchoolFindManySchema } from '../findManySchool.schema';
import { StudentFindManySchema as StudentFindManySchema } from '../findManyStudent.schema';
import { CompetitionCountOutputTypeArgsObjectSchema as CompetitionCountOutputTypeArgsObjectSchema } from './CompetitionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  startsAt: z.boolean().optional(),
  endsAt: z.boolean().optional(),
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  state: z.boolean().optional(),
  schools: z.union([z.boolean(), z.lazy(() => SchoolFindManySchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => StudentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompetitionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompetitionSelectObjectSchema: z.ZodType<Prisma.CompetitionSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionSelect>;
export const CompetitionSelectObjectZodSchema = makeSchema();
