import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { EnumStateFieldUpdateOperationsInputObjectSchema as EnumStateFieldUpdateOperationsInputObjectSchema } from './EnumStateFieldUpdateOperationsInput.schema';
import { CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInputObjectSchema as CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInputObjectSchema } from './CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInput.schema'

const makeSchema = () => z.object({
  state: z.union([StateSchema, z.lazy(() => EnumStateFieldUpdateOperationsInputObjectSchema)]).optional(),
  competition: z.lazy(() => CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInputObjectSchema).optional()
}).strict();
export const CompetitionAvailableStateUpdateInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateInput>;
export const CompetitionAvailableStateUpdateInputObjectZodSchema = makeSchema();
