import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './CompetitionAvailableStateWhereUniqueInput.schema';
import { CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateCreateOrConnectWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateCreateOrConnectWithoutCompetitionInput>;
export const CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectZodSchema = makeSchema();
