import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateScalarWhereInputObjectSchema as CompetitionAvailableStateScalarWhereInputObjectSchema } from './CompetitionAvailableStateScalarWhereInput.schema';
import { CompetitionAvailableStateUpdateManyMutationInputObjectSchema as CompetitionAvailableStateUpdateManyMutationInputObjectSchema } from './CompetitionAvailableStateUpdateManyMutationInput.schema';
import { CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CompetitionAvailableStateUpdateManyMutationInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedUpdateManyWithoutCompetitionInputObjectSchema)])
}).strict();
export const CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInput>;
export const CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectZodSchema = makeSchema();
