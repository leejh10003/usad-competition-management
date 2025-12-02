import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  coachId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateWithoutTeamInput>;
export const TeamCoachRelationshipUncheckedUpdateWithoutTeamInputObjectZodSchema = makeSchema();
