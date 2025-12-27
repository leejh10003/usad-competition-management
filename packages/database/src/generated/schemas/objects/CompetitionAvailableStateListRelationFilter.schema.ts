import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateWhereInputObjectSchema as CompetitionAvailableStateWhereInputObjectSchema } from './CompetitionAvailableStateWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).optional(),
  some: z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).optional(),
  none: z.lazy(() => CompetitionAvailableStateWhereInputObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateListRelationFilterObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateListRelationFilter>;
export const CompetitionAvailableStateListRelationFilterObjectZodSchema = makeSchema();
