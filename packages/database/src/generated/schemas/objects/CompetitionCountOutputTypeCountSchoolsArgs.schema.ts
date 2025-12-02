import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const CompetitionCountOutputTypeCountSchoolsArgsObjectSchema = makeSchema();
export const CompetitionCountOutputTypeCountSchoolsArgsObjectZodSchema = makeSchema();
