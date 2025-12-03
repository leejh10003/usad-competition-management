import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './StudentOrderByWithRelationInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  checkedInAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputObjectSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EventCheckInOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventCheckInOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCheckInOrderByWithRelationInput>;
export const EventCheckInOrderByWithRelationInputObjectZodSchema = makeSchema();
