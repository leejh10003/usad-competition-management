import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCountOutputTypeCountCoachesArgsObjectSchema as SchoolCountOutputTypeCountCoachesArgsObjectSchema } from './SchoolCountOutputTypeCountCoachesArgs.schema';
import { SchoolCountOutputTypeCountTeamsArgsObjectSchema as SchoolCountOutputTypeCountTeamsArgsObjectSchema } from './SchoolCountOutputTypeCountTeamsArgs.schema';
import { SchoolCountOutputTypeCountStudentsArgsObjectSchema as SchoolCountOutputTypeCountStudentsArgsObjectSchema } from './SchoolCountOutputTypeCountStudentsArgs.schema'

const makeSchema = () => z.object({
  coaches: z.union([z.boolean(), z.lazy(() => SchoolCountOutputTypeCountCoachesArgsObjectSchema)]).optional(),
  teams: z.union([z.boolean(), z.lazy(() => SchoolCountOutputTypeCountTeamsArgsObjectSchema)]).optional(),
  students: z.union([z.boolean(), z.lazy(() => SchoolCountOutputTypeCountStudentsArgsObjectSchema)]).optional()
}).strict();
export const SchoolCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SchoolCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCountOutputTypeSelect>;
export const SchoolCountOutputTypeSelectObjectZodSchema = makeSchema();
