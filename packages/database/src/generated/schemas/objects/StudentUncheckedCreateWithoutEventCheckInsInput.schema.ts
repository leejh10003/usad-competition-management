import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema';
import { StateSchema } from '../enums/State.schema';
import { StudentTypeSchema } from '../enums/StudentType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  externalStudentId: z.string().optional().nullable(),
  division: DivisionSchema,
  gpa: z.number().optional().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  usadPin: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  attachmentOnRegistering: z.string().optional().nullable(),
  streetAddress: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: StateSchema.optional().nullable(),
  zipCode: z.string().optional().nullable(),
  guardianFirstName: z.string().optional().nullable(),
  guardianLastName: z.string().optional().nullable(),
  guardianPhone: z.string().optional().nullable(),
  guardianEmail: z.string().optional().nullable(),
  mutationIndex: z.number().int(),
  objectiveScore: z.number().optional().nullable(),
  subjectiveScore: z.number().optional().nullable(),
  teamId: z.string().optional().nullable(),
  type: StudentTypeSchema,
  schoolId: z.string().optional().nullable(),
  competitionId: z.string().optional().nullable()
}).strict();
export const StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutEventCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateWithoutEventCheckInsInput>;
export const StudentUncheckedCreateWithoutEventCheckInsInputObjectZodSchema = makeSchema();
