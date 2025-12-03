import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { NullableEnumStateFieldUpdateOperationsInputObjectSchema as NullableEnumStateFieldUpdateOperationsInputObjectSchema } from './NullableEnumStateFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema as CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema } from './CoachUpdateOneWithoutPrimarySchoolNestedInput.schema';
import { CompetitionUpdateOneRequiredWithoutSchoolsNestedInputObjectSchema as CompetitionUpdateOneRequiredWithoutSchoolsNestedInputObjectSchema } from './CompetitionUpdateOneRequiredWithoutSchoolsNestedInput.schema';
import { CoachUpdateManyWithoutSchoolNestedInputObjectSchema as CoachUpdateManyWithoutSchoolNestedInputObjectSchema } from './CoachUpdateManyWithoutSchoolNestedInput.schema';
import { TeamUpdateManyWithoutSchoolNestedInputObjectSchema as TeamUpdateManyWithoutSchoolNestedInputObjectSchema } from './TeamUpdateManyWithoutSchoolNestedInput.schema'

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
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  primaryCoach: z.lazy(() => CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema).optional(),
  competition: z.lazy(() => CompetitionUpdateOneRequiredWithoutSchoolsNestedInputObjectSchema).optional(),
  coaches: z.lazy(() => CoachUpdateManyWithoutSchoolNestedInputObjectSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutSchoolNestedInputObjectSchema).optional()
}).strict();
export const SchoolUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateWithoutStudentsInput>;
export const SchoolUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
