import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalStudentId: SortOrderSchema.optional(),
  division: SortOrderSchema.optional(),
  gpa: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  usadPin: SortOrderSchema.optional(),
  signature: SortOrderSchema.optional(),
  attachmentOnRegistering: SortOrderSchema.optional(),
  streetAddress: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zipCode: SortOrderSchema.optional(),
  guardianFirstName: SortOrderSchema.optional(),
  guardianLastName: SortOrderSchema.optional(),
  guardianPhone: SortOrderSchema.optional(),
  guardianEmail: SortOrderSchema.optional(),
  teamId: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional(),
  competitionId: SortOrderSchema.optional()
}).strict();
export const StudentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentMinOrderByAggregateInput>;
export const StudentMinOrderByAggregateInputObjectZodSchema = makeSchema();
