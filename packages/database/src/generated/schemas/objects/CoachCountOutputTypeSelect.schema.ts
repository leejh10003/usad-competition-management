import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCountOutputTypeCountTeamRelationshipArgsObjectSchema as CoachCountOutputTypeCountTeamRelationshipArgsObjectSchema } from './CoachCountOutputTypeCountTeamRelationshipArgs.schema'

const makeSchema = () => z.object({
  teamRelationship: z.union([z.boolean(), z.lazy(() => CoachCountOutputTypeCountTeamRelationshipArgsObjectSchema)]).optional()
}).strict();
export const CoachCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CoachCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CoachCountOutputTypeSelect>;
export const CoachCountOutputTypeSelectObjectZodSchema = makeSchema();
