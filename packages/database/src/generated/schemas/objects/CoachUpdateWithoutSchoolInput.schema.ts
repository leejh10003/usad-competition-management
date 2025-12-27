import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema as SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema } from './SchoolUpdateOneWithoutPrimaryCoachNestedInput.schema';
import { TeamCoachRelationshipUpdateManyWithoutCoachNestedInputObjectSchema as TeamCoachRelationshipUpdateManyWithoutCoachNestedInputObjectSchema } from './TeamCoachRelationshipUpdateManyWithoutCoachNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalCoachId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  signature: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  primarySchool: z.lazy(() => SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema).optional(),
  teamRelationship: z.lazy(() => TeamCoachRelationshipUpdateManyWithoutCoachNestedInputObjectSchema).optional()
}).strict();
export const CoachUpdateWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUpdateWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateWithoutSchoolInput>;
export const CoachUpdateWithoutSchoolInputObjectZodSchema = makeSchema();
