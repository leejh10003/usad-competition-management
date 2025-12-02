import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudentCountOrderByAggregateInputObjectSchema as StudentCountOrderByAggregateInputObjectSchema } from './StudentCountOrderByAggregateInput.schema';
import { StudentAvgOrderByAggregateInputObjectSchema as StudentAvgOrderByAggregateInputObjectSchema } from './StudentAvgOrderByAggregateInput.schema';
import { StudentMaxOrderByAggregateInputObjectSchema as StudentMaxOrderByAggregateInputObjectSchema } from './StudentMaxOrderByAggregateInput.schema';
import { StudentMinOrderByAggregateInputObjectSchema as StudentMinOrderByAggregateInputObjectSchema } from './StudentMinOrderByAggregateInput.schema';
import { StudentSumOrderByAggregateInputObjectSchema as StudentSumOrderByAggregateInputObjectSchema } from './StudentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalStudentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  division: SortOrderSchema.optional(),
  gpa: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  usadPin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  signature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attachmentOnRegistering: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  streetAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  zipCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guardianFirstName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guardianLastName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guardianPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  guardianEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  teamId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  schoolId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  competitionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => StudentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StudentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StudentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentOrderByWithAggregationInput>;
export const StudentOrderByWithAggregationInputObjectZodSchema = makeSchema();
