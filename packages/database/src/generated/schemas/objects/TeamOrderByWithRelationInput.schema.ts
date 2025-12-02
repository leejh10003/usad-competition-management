import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './SchoolOrderByWithRelationInput.schema';
import { TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema as TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema } from './TeamCoachRelationshipOrderByRelationAggregateInput.schema';
import { StudentOrderByRelationAggregateInputObjectSchema as StudentOrderByRelationAggregateInputObjectSchema } from './StudentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  externalTeamId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  schoolId: SortOrderSchema.optional(),
  division: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  objectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subjectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  school: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipOrderByRelationAggregateInputObjectSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TeamOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamOrderByWithRelationInput>;
export const TeamOrderByWithRelationInputObjectZodSchema = makeSchema();
