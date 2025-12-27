import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DivisionSchema } from '../enums/Division.schema';
import { StateSchema } from '../enums/State.schema';
import { TeamCreateNestedOneWithoutStudentsInputObjectSchema as TeamCreateNestedOneWithoutStudentsInputObjectSchema } from './TeamCreateNestedOneWithoutStudentsInput.schema';
import { SchoolCreateNestedOneWithoutStudentsInputObjectSchema as SchoolCreateNestedOneWithoutStudentsInputObjectSchema } from './SchoolCreateNestedOneWithoutStudentsInput.schema';
import { CompetitionCreateNestedOneWithoutStudentsInputObjectSchema as CompetitionCreateNestedOneWithoutStudentsInputObjectSchema } from './CompetitionCreateNestedOneWithoutStudentsInput.schema';
import { EventCheckInCreateNestedManyWithoutStudentInputObjectSchema as EventCheckInCreateNestedManyWithoutStudentInputObjectSchema } from './EventCheckInCreateNestedManyWithoutStudentInput.schema'

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
  team: z.lazy(() => TeamCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  school: z.lazy(() => SchoolCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  competition: z.lazy(() => CompetitionCreateNestedOneWithoutStudentsInputObjectSchema).optional(),
  eventCheckIns: z.lazy(() => EventCheckInCreateNestedManyWithoutStudentInputObjectSchema).optional()
}).strict();
export const StudentCreateInputObjectSchema: z.ZodType<Prisma.StudentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateInput>;
export const StudentCreateInputObjectZodSchema = makeSchema();
