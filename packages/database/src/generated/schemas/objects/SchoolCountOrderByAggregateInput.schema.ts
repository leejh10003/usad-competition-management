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
  primaryCoachId: SortOrderSchema.optional(),
  emailDomain: SortOrderSchema.optional(),
  division: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional()
}).strict();
export const SchoolCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SchoolCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCountOrderByAggregateInput>;
export const SchoolCountOrderByAggregateInputObjectZodSchema = makeSchema();
