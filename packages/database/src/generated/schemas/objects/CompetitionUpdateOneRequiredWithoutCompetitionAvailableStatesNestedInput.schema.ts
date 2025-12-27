import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUpsertWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUpsertWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUpsertWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUpdateWithoutCompetitionAvailableStatesInput.schema';
import { CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema as CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema } from './CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutCompetitionAvailableStatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutCompetitionAvailableStatesInputObjectSchema).optional(),
  upsert: z.lazy(() => CompetitionUpsertWithoutCompetitionAvailableStatesInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompetitionUpdateToOneWithWhereWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUpdateWithoutCompetitionAvailableStatesInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutCompetitionAvailableStatesInputObjectSchema)]).optional()
}).strict();
export const CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInput>;
export const CompetitionUpdateOneRequiredWithoutCompetitionAvailableStatesNestedInputObjectZodSchema = makeSchema();
