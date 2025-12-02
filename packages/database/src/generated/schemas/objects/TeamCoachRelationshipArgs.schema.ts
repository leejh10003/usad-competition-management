import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCoachRelationshipSelectObjectSchema as TeamCoachRelationshipSelectObjectSchema } from './TeamCoachRelationshipSelect.schema';
import { TeamCoachRelationshipIncludeObjectSchema as TeamCoachRelationshipIncludeObjectSchema } from './TeamCoachRelationshipInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TeamCoachRelationshipSelectObjectSchema).optional(),
  include: z.lazy(() => TeamCoachRelationshipIncludeObjectSchema).optional()
}).strict();
export const TeamCoachRelationshipArgsObjectSchema = makeSchema();
export const TeamCoachRelationshipArgsObjectZodSchema = makeSchema();
