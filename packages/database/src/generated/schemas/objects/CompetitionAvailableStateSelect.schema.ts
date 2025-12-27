import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema'

const makeSchema = () => z.object({
  competitionId: z.boolean().optional(),
  state: z.boolean().optional(),
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateSelectObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateSelect>;
export const CompetitionAvailableStateSelectObjectZodSchema = makeSchema();
