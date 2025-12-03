import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneRequiredWithoutCoachesNestedInputObjectSchema as SchoolUpdateOneRequiredWithoutCoachesNestedInputObjectSchema } from './SchoolUpdateOneRequiredWithoutCoachesNestedInput.schema';
import { SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema as SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema } from './SchoolUpdateOneWithoutPrimaryCoachNestedInput.schema'

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
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  school: z.lazy(() => SchoolUpdateOneRequiredWithoutCoachesNestedInputObjectSchema).optional(),
  primarySchool: z.lazy(() => SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema).optional()
}).strict();
export const CoachUpdateWithoutTeamRelationshipInputObjectSchema: z.ZodType<Prisma.CoachUpdateWithoutTeamRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateWithoutTeamRelationshipInput>;
export const CoachUpdateWithoutTeamRelationshipInputObjectZodSchema = makeSchema();
