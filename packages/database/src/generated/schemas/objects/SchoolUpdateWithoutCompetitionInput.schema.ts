import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema as CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema } from './CoachUpdateOneWithoutPrimarySchoolNestedInput.schema';
import { CoachUpdateManyWithoutSchoolNestedInputObjectSchema as CoachUpdateManyWithoutSchoolNestedInputObjectSchema } from './CoachUpdateManyWithoutSchoolNestedInput.schema';
import { TeamUpdateManyWithoutSchoolNestedInputObjectSchema as TeamUpdateManyWithoutSchoolNestedInputObjectSchema } from './TeamUpdateManyWithoutSchoolNestedInput.schema';
import { StudentUpdateManyWithoutSchoolNestedInputObjectSchema as StudentUpdateManyWithoutSchoolNestedInputObjectSchema } from './StudentUpdateManyWithoutSchoolNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalSchoolId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVirtual: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  streetAddress: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([StateSchema, z.lazy(() => NullableEnumStateFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  zipCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  principalName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  principalEmail: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emailDomain: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  division: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  primaryCoach: z.lazy(() => CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema).optional(),
  coaches: z.lazy(() => CoachUpdateManyWithoutSchoolNestedInputObjectSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutSchoolNestedInputObjectSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutSchoolNestedInputObjectSchema).optional()
}).strict();
export const SchoolUpdateWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.SchoolUpdateWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateWithoutCompetitionInput>;
export const SchoolUpdateWithoutCompetitionInputObjectZodSchema = makeSchema();
