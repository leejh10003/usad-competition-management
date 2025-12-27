import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInputObjectSchema: z.ZodType<Prisma.CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInput>;
export const CompetitionCreateNestedOneWithoutCompetitionAvailableStatesInputObjectZodSchema = makeSchema();
