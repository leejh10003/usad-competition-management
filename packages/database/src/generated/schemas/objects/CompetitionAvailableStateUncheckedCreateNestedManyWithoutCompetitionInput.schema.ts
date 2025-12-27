import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateOrConnectWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema as CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema } from './CompetitionAvailableStateCreateManyCompetitionInputEnvelope.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './CompetitionAvailableStateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInput>;
export const CompetitionAvailableStateUncheckedCreateNestedManyWithoutCompetitionInputObjectZodSchema = makeSchema();
