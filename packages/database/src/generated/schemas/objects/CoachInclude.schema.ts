import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolArgsObjectSchema as SchoolArgsObjectSchema } from './SchoolArgs.schema';
import { TeamCoachRelationshipFindManySchema as TeamCoachRelationshipFindManySchema } from '../findManyTeamCoachRelationship.schema';
import { CoachCountOutputTypeArgsObjectSchema as CoachCountOutputTypeArgsObjectSchema } from './CoachCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  school: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  primarySchool: z.union([z.boolean(), z.lazy(() => SchoolArgsObjectSchema)]).optional(),
  teamRelationship: z.union([z.boolean(), z.lazy(() => TeamCoachRelationshipFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CoachCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CoachIncludeObjectSchema: z.ZodType<Prisma.CoachInclude> = makeSchema() as unknown as z.ZodType<Prisma.CoachInclude>;
export const CoachIncludeObjectZodSchema = makeSchema();
