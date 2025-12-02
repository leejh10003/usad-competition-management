import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutCompetitionInputObjectSchema as SchoolCreateWithoutCompetitionInputObjectSchema } from './SchoolCreateWithoutCompetitionInput.schema';
import { SchoolUncheckedCreateWithoutCompetitionInputObjectSchema as SchoolUncheckedCreateWithoutCompetitionInputObjectSchema } from './SchoolUncheckedCreateWithoutCompetitionInput.schema';
import { SchoolCreateOrConnectWithoutCompetitionInputObjectSchema as SchoolCreateOrConnectWithoutCompetitionInputObjectSchema } from './SchoolCreateOrConnectWithoutCompetitionInput.schema';
import { SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema as SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from './SchoolUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { SchoolCreateManyCompetitionInputEnvelopeObjectSchema as SchoolCreateManyCompetitionInputEnvelopeObjectSchema } from './SchoolCreateManyCompetitionInputEnvelope.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema as SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from './SchoolUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { SchoolUpdateManyWithWhereWithoutCompetitionInputObjectSchema as SchoolUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from './SchoolUpdateManyWithWhereWithoutCompetitionInput.schema';
import { SchoolScalarWhereInputObjectSchema as SchoolScalarWhereInputObjectSchema } from './SchoolScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SchoolCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SchoolCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SchoolWhereUniqueInputObjectSchema), z.lazy(() => SchoolWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SchoolWhereUniqueInputObjectSchema), z.lazy(() => SchoolWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SchoolWhereUniqueInputObjectSchema), z.lazy(() => SchoolWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SchoolWhereUniqueInputObjectSchema), z.lazy(() => SchoolWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SchoolUpdateManyWithWhereWithoutCompetitionInputObjectSchema), z.lazy(() => SchoolUpdateManyWithWhereWithoutCompetitionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SchoolScalarWhereInputObjectSchema), z.lazy(() => SchoolScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema: z.ZodType<Prisma.SchoolUncheckedUpdateManyWithoutCompetitionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUncheckedUpdateManyWithoutCompetitionNestedInput>;
export const SchoolUncheckedUpdateManyWithoutCompetitionNestedInputObjectZodSchema = makeSchema();
