import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SchoolUpdateOneRequiredWithoutTeamsNestedInputObjectSchema as SchoolUpdateOneRequiredWithoutTeamsNestedInputObjectSchema } from './SchoolUpdateOneRequiredWithoutTeamsNestedInput.schema';
import { TeamCoachRelationshipUpdateManyWithoutTeamNestedInputObjectSchema as TeamCoachRelationshipUpdateManyWithoutTeamNestedInputObjectSchema } from './TeamCoachRelationshipUpdateManyWithoutTeamNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalTeamId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  division: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  objectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  subjectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  mutationIndex: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  school: z.lazy(() => SchoolUpdateOneRequiredWithoutTeamsNestedInputObjectSchema).optional(),
  coachesRelationship: z.lazy(() => TeamCoachRelationshipUpdateManyWithoutTeamNestedInputObjectSchema).optional()
}).strict();
export const TeamUpdateWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamUpdateWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateWithoutStudentsInput>;
export const TeamUpdateWithoutStudentsInputObjectZodSchema = makeSchema();
