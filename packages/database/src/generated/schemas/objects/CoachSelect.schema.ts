import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolArgsObjectSchema as SchoolArgsObjectSchema } from './SchoolArgs.schema';
import { TeamCoachRelationshipFindManySchema as TeamCoachRelationshipFindManySchema } from '../findManyTeamCoachRelationship.schema';
import { CoachCountOutputTypeArgsObjectSchema as CoachCountOutputTypeArgsObjectSchema } from './CoachCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  externalCoachId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  signature: z.boolean().optional(),
  mutationIndex: z.boolean().optional(),
  schoolId: z.boolean().optional(),
  school: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  primarySchool: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  teamRelationship: z.union([z.boolean(), z.lazy(() => TeamCoachRelationshipFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CoachCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CoachSelectObjectSchema: z.ZodType<Prisma.CoachSelect> = makeSchema() as unknown as z.ZodType<Prisma.CoachSelect>;
export const CoachSelectObjectZodSchema = makeSchema();
