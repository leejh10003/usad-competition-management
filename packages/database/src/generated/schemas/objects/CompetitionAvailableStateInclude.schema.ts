import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionArgsObjectSchema as CompetitionArgsObjectSchema } from './CompetitionArgs.schema'

const makeSchema = () => z.object({
  competition: z.union([z.boolean(), z.lazy(() => CompetitionArgsObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateIncludeObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateInclude>;
export const CompetitionAvailableStateIncludeObjectZodSchema = makeSchema();
