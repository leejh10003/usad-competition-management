import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  teamId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInputObjectSchema: z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInput>;
export const TeamCoachRelationshipUncheckedUpdateManyWithoutCoachInputObjectZodSchema = makeSchema();
