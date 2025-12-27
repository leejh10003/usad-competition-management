import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TeamOrderByWithRelationInputObjectSchema as TeamOrderByWithRelationInputObjectSchema } from './TeamOrderByWithRelationInput.schema';
import { SchoolOrderByWithRelationInputObjectSchema as SchoolOrderByWithRelationInputObjectSchema } from './SchoolOrderByWithRelationInput.schema';
import { CompetitionOrderByWithRelationInputObjectSchema as CompetitionOrderByWithRelationInputObjectSchema } from './CompetitionOrderByWithRelationInput.schema';
import { EventCheckInOrderByRelationAggregateInputObjectSchema as EventCheckInOrderByRelationAggregateInputObjectSchema } from './EventCheckInOrderByRelationAggregateInput.schema'

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
  mutationIndex: SortOrderSchema.optional(),
  objectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  subjectiveScore: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  teamId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  schoolId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  competitionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputObjectSchema).optional(),
  school: z.lazy(() => SchoolOrderByWithRelationInputObjectSchema).optional(),
  competition: z.lazy(() => CompetitionOrderByWithRelationInputObjectSchema).optional(),
  eventCheckIns: z.lazy(() => EventCheckInOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StudentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentOrderByWithRelationInput>;
export const StudentOrderByWithRelationInputObjectZodSchema = makeSchema();
