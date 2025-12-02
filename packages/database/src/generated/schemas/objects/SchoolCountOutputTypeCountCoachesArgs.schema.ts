import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereInputObjectSchema).optional()
}).strict();
export const SchoolCountOutputTypeCountCoachesArgsObjectSchema = makeSchema();
export const SchoolCountOutputTypeCountCoachesArgsObjectZodSchema = makeSchema();
