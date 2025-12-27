import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUncheckedCreateWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema as CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateCreateOrConnectWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema as CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema } from './CompetitionAvailableStateCreateManyCompetitionInputEnvelope.schema';
import { CompetitionAvailableStateWhereUniqueInputObjectSchema as CompetitionAvailableStateWhereUniqueInputObjectSchema } from './CompetitionAvailableStateWhereUniqueInput.schema';
import { CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectSchema as CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from './CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInput.schema';
import { CompetitionAvailableStateScalarWhereInputObjectSchema as CompetitionAvailableStateScalarWhereInputObjectSchema } from './CompetitionAvailableStateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompetitionAvailableStateCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema), z.lazy(() => CompetitionAvailableStateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectSchema), z.lazy(() => CompetitionAvailableStateUpdateManyWithWhereWithoutCompetitionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema), z.lazy(() => CompetitionAvailableStateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CompetitionAvailableStateUpdateManyWithoutCompetitionNestedInputObjectSchema: z.ZodType<Prisma.CompetitionAvailableStateUpdateManyWithoutCompetitionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionAvailableStateUpdateManyWithoutCompetitionNestedInput>;
export const CompetitionAvailableStateUpdateManyWithoutCompetitionNestedInputObjectZodSchema = makeSchema();
