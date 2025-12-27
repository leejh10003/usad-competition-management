import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { EnumStateFieldUpdateOperationsInputObjectSchema as EnumStateFieldUpdateOperationsInputObjectSchema } from './EnumStateFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  state: z.union([StateSchema, z.lazy(() => EnumStateFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInput>;
export const CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInputObjectZodSchema = makeSchema();
