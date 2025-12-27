import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUpdateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema)]),
  create: z.union([z.lazy(() => CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema)]),
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional()
}).strict();
export const CompetitionUpsertWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionUpsertWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpsertWithoutCompetitionAvailableStatesInput>;
export const CompetitionUpsertWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
