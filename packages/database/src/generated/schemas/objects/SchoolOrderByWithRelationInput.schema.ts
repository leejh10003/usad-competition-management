import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CoachOrderByWithRelationInputObjectSchema as CoachOrderByWithRelationInputObjectSchema } from './CoachOrderByWithRelationInput.schema';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './CompetitionOrderByWithRelationInput.schema';
import { CoachOrderByRelationAggregateInputObjectSchema as CoachOrderByRelationAggregateInputObjectSchema } from './CoachOrderByRelationAggregateInput.schema';
import { TeamOrderByRelationAggregateInputObjectSchema as TeamOrderByRelationAggregateInputObjectSchema } from './TeamOrderByRelationAggregateInput.schema';
import { StudentOrderByRelationAggregateInputObjectSchema as StudentOrderByRelationAggregateInputObjectSchema } from './StudentOrderByRelationAggregateInput.schema'

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
  objectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subjectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  primaryCoachId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailDomain: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  division: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  competitionId: SortOrderSchema.optional(),
  mutationIndex: SortOrderSchema.optional(),
  primaryCoach: z.lazy(() => CoachOrderByWithRelationInputObjectSchema).optional(),
  competition: z.lazy(() => CompetitionOrderByWithRelationInputObjectSchema).optional(),
  coaches: z.lazy(() => CoachOrderByRelationAggregateInputObjectSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputObjectSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SchoolOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SchoolOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolOrderByWithRelationInput>;
export const SchoolOrderByWithRelationInputObjectZodSchema = makeSchema();
