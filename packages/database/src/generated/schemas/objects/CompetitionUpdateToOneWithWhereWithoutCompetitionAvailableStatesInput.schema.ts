import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUpdateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema)])
}).strict();
export const CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInput>;
export const CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
