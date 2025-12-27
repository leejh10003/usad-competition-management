import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './CompetitionAvailableStateWhereUniqueInput.schema';
import { CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUpdateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema)])
}).strict();
export const CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInput>;
export const CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
