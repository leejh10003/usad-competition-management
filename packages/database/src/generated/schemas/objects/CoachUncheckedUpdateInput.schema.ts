import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema as SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema } from './SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInput.schema';
import { TeamCoachRelationshipUncheckedUpdateManyWithoutCoachNestedInputObjectSchema as TeamCoachRelationshipUncheckedUpdateManyWithoutCoachNestedInputObjectSchema } from './TeamCoachRelationshipUncheckedUpdateManyWithoutCoachNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalCoachId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  signature: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  objectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  subjectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  schoolId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  primarySchool: z.lazy(() => SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipUncheckedUpdateManyWithoutCoachNestedInputObjectSchema).optional()
}).strict();
export const CoachUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CoachUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedUpdateInput>;
export const CoachUncheckedUpdateInputObjectZodSchema = makeSchema();
