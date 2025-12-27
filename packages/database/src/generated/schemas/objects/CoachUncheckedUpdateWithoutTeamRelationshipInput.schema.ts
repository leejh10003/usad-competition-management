import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema as SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema } from './SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalCoachId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  signature: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  schoolId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  primarySchool: z.lazy(() => SchoolUncheckedUpdateOneWithoutPrimaryCoachNestedInputObjectSchema).optional()
}).strict();
export const CoachUncheckedUpdateWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachUncheckedUpdateWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedUpdateWithoutTeamRelationshipInput>;
export const CoachUncheckedUpdateWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
