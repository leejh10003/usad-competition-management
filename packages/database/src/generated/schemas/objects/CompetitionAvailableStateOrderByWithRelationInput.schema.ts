import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './CompetitionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  competitionId: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  competition: z.lazy(() => CompetitionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateOrderByWithRelationInput>;
export const CompetitionAvailableStateOrderByWithRelationInputObjectZodSchema = makeSchema();
