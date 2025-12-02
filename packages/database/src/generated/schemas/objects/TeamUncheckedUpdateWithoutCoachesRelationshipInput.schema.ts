import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { StudentUncheckedUpdateManyWithoutTeamNestedInputObjectSchema as StudentUncheckedUpdateManyWithoutTeamNestedInputObjectSchema } from './StudentUncheckedUpdateManyWithoutTeamNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalTeamId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  schoolId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  division: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  objectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  subjectiveScore: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutTeamNestedInputObjectSchema).optional()
}).strict();
export const TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutCoachesRelationshipInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedUpdateWithoutCoachesRelationshipInput>;
export const TeamUncheckedUpdateWithoutCoachesRelationshipInputObjectZodSchema = makeSchema();
