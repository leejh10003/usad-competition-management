import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCountOutputTypeCountCoachesRelationshipArgsObjectSchema as TeamCountOutputTypeCountCoachesRelationshipArgsObjectSchema } from './TeamCountOutputTypeCountCoachesRelationshipArgs.schema';
import { TeamCountOutputTypeCountStudentsArgsObjectSchema as TeamCountOutputTypeCountStudentsArgsObjectSchema } from './TeamCountOutputTypeCountStudentsArgs.schema'

const makeSchema = () => z.object({
  coachesRelationship: z.union([z.boolean(), z.lazy(() => TeamCountOutputTypeCountCoachesRelationshipArgsObjectSchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => TeamCountOutputTypeCountStudentsArgsObjectSchema)]).optional()
}).strict();
export const TeamCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TeamCountOutputTypeSelect>;
export const TeamCountOutputTypeSelectObjectZodSchema = makeSchema();
