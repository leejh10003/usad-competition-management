import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamArgsObjectSchema as TeamArgsObjectSchema } from './TeamArgs.schema';
import { CoachArgsObjectSchema as CoachArgsObjectSchema } from './CoachArgs.schema'

const makeSchema = () => z.object({
  team: z.union([z.boolean(), z.lazy(() => TeamArgsObjectSchema)]).optional(),
  coach: z.union([z.boolean(), z.lazy(() => CoachArgsObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipIncludeObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipInclude> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipInclude>;
export const TeamCoachRelationshipIncludeObjectZodSchema = makeSchema();
