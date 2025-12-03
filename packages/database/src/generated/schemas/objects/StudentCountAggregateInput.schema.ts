import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  externalStudentId: z.literal(true).optional(),
  division: z.literal(true).optional(),
  gpa: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  usadPin: z.literal(true).optional(),
  signature: z.literal(true).optional(),
  attachmentOnRegistering: z.literal(true).optional(),
  streetAddress: z.literal(true).optional(),
  city: z.literal(true).optional(),
  state: z.literal(true).optional(),
  zipCode: z.literal(true).optional(),
  guardianFirstName: z.literal(true).optional(),
  guardianLastName: z.literal(true).optional(),
  guardianPhone: z.literal(true).optional(),
  guardianEmail: z.literal(true).optional(),
  mutationIndex: z.literal(true).optional(),
  teamId: z.literal(true).optional(),
  schoolId: z.literal(true).optional(),
  competitionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StudentCountAggregateInputObjectSchema: z.ZodType<Prisma.StudentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentCountAggregateInputType>;
export const StudentCountAggregateInputObjectZodSchema = makeSchema();
