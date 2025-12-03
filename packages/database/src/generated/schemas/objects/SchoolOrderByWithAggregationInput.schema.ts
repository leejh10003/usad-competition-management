import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SchoolCountOrderByAggregateInputObjectSchema as SchoolCountOrderByAggregateInputObjectSchema } from './SchoolCountOrderByAggregateInput.schema';
import { SchoolAvgOrderByAggregateInputObjectSchema as SchoolAvgOrderByAggregateInputObjectSchema } from './SchoolAvgOrderByAggregateInput.schema';
import { SchoolMaxOrderByAggregateInputObjectSchema as SchoolMaxOrderByAggregateInputObjectSchema } from './SchoolMaxOrderByAggregateInput.schema';
import { SchoolMinOrderByAggregateInputObjectSchema as SchoolMinOrderByAggregateInputObjectSchema } from './SchoolMinOrderByAggregateInput.schema';
import { SchoolSumOrderByAggregateInputObjectSchema as SchoolSumOrderByAggregateInputObjectSchema } from './SchoolSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalSchoolId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  isVirtual: SortOrderSchema.optional(),
  streetAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  state: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  zipCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  principalName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  principalEmail: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  primaryCoachId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailDomain: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  division: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  competitionId: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  _count: z.lazy(() => SchoolCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SchoolAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SchoolMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SchoolMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SchoolSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SchoolOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SchoolOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolOrderByWithAggregationInput>;
export const SchoolOrderByWithAggregationInputObjectZodSchema = makeSchema();
