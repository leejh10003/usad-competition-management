import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './CompetitionAvailableStateWhereUniqueInput.schema';
import { CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUpdateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CompetitionAvailableStateUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedUpdateWithoutCompetitionInputObjectSchema)]),
  create: z.union([z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInput>;
export const CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
