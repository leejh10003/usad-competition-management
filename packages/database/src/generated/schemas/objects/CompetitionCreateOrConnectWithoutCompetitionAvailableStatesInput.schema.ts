import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema)])
}).strict();
export const CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInput>;
export const CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
