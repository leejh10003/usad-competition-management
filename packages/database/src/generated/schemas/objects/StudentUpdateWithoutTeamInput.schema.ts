import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DivisionSchema } from '../enums/Division.schema';
import { EnumDivisionFieldUpdateOperationsInputObjectSchema as EnumDivisionFieldUpdateOperationsInputObjectSchema } from './EnumDivisionFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StudentTypeSchema } from '../enums/StudentType.schema';
import { EnumStudentTypeFieldUpdateOperationsInputObjectSchema as EnumStudentTypeFieldUpdateOperationsInputObjectSchema } from './EnumStudentTypeFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneWithoutStudentsNestedInputObjectSchema as SchoolUpdateOneWithoutStudentsNestedInputObjectSchema } from './SchoolUpdateOneWithoutStudentsNestedInput.schema';
import { CompetitionUpdateOneWithoutStudentsNestedInputObjectSchema as CompetitionUpdateOneWithoutStudentsNestedInputObjectSchema } from './CompetitionUpdateOneWithoutStudentsNestedInput.schema';
import { EventCheckInUpdateManyWithoutStudentNestedInputObjectSchema as EventCheckInUpdateManyWithoutStudentNestedInputObjectSchema } from './EventCheckInUpdateManyWithoutStudentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalStudentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  division: z.union([DivisionSchema, z.lazy(() => EnumDivisionFieldUpdateOperationsInputObjectSchema)]).optional(),
  gpa: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  usadPin: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  signature: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  attachmentOnRegistering: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  streetAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  zipCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  guardianFirstName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  guardianLastName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  guardianPhone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  guardianEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  objectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  subjectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([StudentTypeSchema, z.lazy(() => EnumStudentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  school: z.lazy(() => SchoolUpdateOneWithoutStudentsNestedInputObjectSchema).optional(),
  competition: z.lazy(() => CompetitionUpdateOneWithoutStudentsNestedInputObjectSchema).optional(),
  eventCheckIns: z.lazy(() => EventCheckInUpdateManyWithoutStudentNestedInputObjectSchema).optional()
}).strict();
export const StudentUpdateWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithoutTeamInput>;
export const StudentUpdateWithoutTeamInputObjectZodSchema = makeSchema();
