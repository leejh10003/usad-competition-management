import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDivisionFilterObjectSchema as NestedEnumDivisionFilterObjectSchema } from './NestedEnumDivisionFilter.schema'

const nestedenumdivisionwithaggregatesfilterSchema = z.object({
  equals: DivisionSchema.optional(),
  in: DivisionSchema.array().optional(),
  notIn: DivisionSchema.array().optional(),
  not: z.union([DivisionSchema, z.lazy(() => NestedEnumDivisionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDivisionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDivisionFilterObjectSchema).optional()
}).strict();
export const NestedEnumDivisionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDivisionWithAggregatesFilter> = nestedenumdivisionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDivisionWithAggregatesFilter>;
export const NestedEnumDivisionWithAggregatesFilterObjectZodSchema = nestedenumdivisionwithaggregatesfilterSchema;
