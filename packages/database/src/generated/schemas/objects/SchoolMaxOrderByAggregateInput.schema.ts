import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalSchoolId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isVirtual: SortOrderSchema.optional(),
  streetAddress: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zipCode: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  principalName: SortOrderSchema.optional(),
  principalEmail: SortOrderSchema.optional(),
  objectiveScore: SortOrderSchema.optional(),
  subjectiveScore: SortOrderSchema.optional(),
  primaryCoachId: SortOrderSchema.optional(),
  emailDomain: SortOrderSchema.optional(),
  division: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional()
}).strict();
export const SchoolMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SchoolMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolMaxOrderByAggregateInput>;
export const SchoolMaxOrderByAggregateInputObjectZodSchema = makeSchema();
