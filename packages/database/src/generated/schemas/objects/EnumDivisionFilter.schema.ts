import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema';
import { NestedEnumDivisionFilterObjectSchema as NestedEnumDivisionFilterObjectSchema } from './NestedEnumDivisionFilter.schema'

const makeSchema = () => z.object({
  equals: DivisionSchema.optional(),
  in: DivisionSchema.array().optional(),
  notIn: DivisionSchema.array().optional(),
  not: z.union([DivisionSchema, z.lazy(() => NestedEnumDivisionFilterObjectSchema)]).optional()
}).strict();
export const EnumDivisionFilterObjectSchema: z.ZodType<Prisma.EnumDivisionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDivisionFilter>;
export const EnumDivisionFilterObjectZodSchema = makeSchema();
