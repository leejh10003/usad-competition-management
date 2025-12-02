import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema'

const nestedenumdivisionfilterSchema = z.object({
  equals: DivisionSchema.optional(),
  in: DivisionSchema.array().optional(),
  notIn: DivisionSchema.array().optional(),
  not: z.union([DivisionSchema, z.lazy(() => NestedEnumDivisionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDivisionFilterObjectSchema: z.ZodType<Prisma.NestedEnumDivisionFilter> = nestedenumdivisionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDivisionFilter>;
export const NestedEnumDivisionFilterObjectZodSchema = nestedenumdivisionfilterSchema;
