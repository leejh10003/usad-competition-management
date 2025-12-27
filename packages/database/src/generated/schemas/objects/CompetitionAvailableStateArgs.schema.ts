import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateSelectObjectSchema as CompetitionAvailableStateSelectObjectSchema } from './CompetitionAvailableStateSelect.schema';
import { CompetitionAvailableStateIncludeObjectSchema as CompetitionAvailableStateIncludeObjectSchema } from './CompetitionAvailableStateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CompetitionAvailableStateSelectObjectSchema).optional(),
  include: z.lazy(() => CompetitionAvailableStateIncludeObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateArgsObjectSchema = makeSchema();
export const CompetitionAvailableStateArgsObjectZodSchema = makeSchema();
