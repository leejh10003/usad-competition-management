import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StateSchema } from '../enums/State.schema';
import { EnumStateFieldUpdateOperationsInputObjectSchema as EnumStateFieldUpdateOperationsInputObjectSchema } from './EnumStateFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  state: z.union([StateSchema, z.lazy(() => EnumStateFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompetitionAvailableStateUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateManyMutationInput>;
export const CompetitionAvailableStateUpdateManyMutationInputObjectZodSchema = makeSchema();
