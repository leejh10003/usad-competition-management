import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsObjectSchema as TeamArgsObjectSchema } from './TeamArgs.schema';
import { CoachArgsObjectSchema as CoachArgsObjectSchema } from './CoachArgs.schema'

const makeSchema = () => z.object({
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
  coachId: z.boolean().optional(),
  coach: z.union([z.boolean(), z.lazy(() => CoachArgsObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipSelectObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipSelect> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipSelect>;
export const TeamCoachRelationshipSelectObjectZodSchema = makeSchema();
