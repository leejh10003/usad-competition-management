import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StateSchema } from '../enums/State.schema';
import { EnumStateFieldUpdateOperationsInputObjectSchema as EnumStateFieldUpdateOperationsInputObjectSchema } from './EnumStateFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  competitionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  state: z.union([StateSchema, z.lazy(() => EnumStateFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUncheckedUpdateManyInput>;
export const CompetitionAvailableStateUncheckedUpdateManyInputObjectZodSchema = makeSchema();
