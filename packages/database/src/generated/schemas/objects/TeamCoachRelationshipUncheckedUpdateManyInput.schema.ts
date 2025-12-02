import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  teamId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  coachId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyInput>;
export const TeamCoachRelationshipUncheckedUpdateManyInputObjectZodSchema = makeSchema();
