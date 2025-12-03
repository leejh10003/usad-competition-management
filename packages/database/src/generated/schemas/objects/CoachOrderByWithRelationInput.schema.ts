import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './SchoolOrderByWithRelationInput.schema';
import { TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema as TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema } from './TeamCoachRelationshipOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalCoachId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  signature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  objectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subjectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  mutationIndex: SortOrderSchema.optional(),
  schoolId: SortOrderSchema.optional(),
  school: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
  primarySchool: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CoachOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CoachOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachOrderByWithRelationInput>;
export const CoachOrderByWithRelationInputObjectZodSchema = makeSchema();
