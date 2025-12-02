import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutCompetitionInputObjectSchema as StudentCreateWithoutCompetitionInputObjectSchema } from './StudentCreateWithoutCompetitionInput.schema';
import { StudentUncheckedCreateWithoutCompetitionInputObjectSchema as StudentUncheckedCreateWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateWithoutCompetitionInput.schema';
import { StudentCreateOrConnectWithoutCompetitionInputObjectSchema as StudentCreateOrConnectWithoutCompetitionInputObjectSchema } from './StudentCreateOrConnectWithoutCompetitionInput.schema';
import { StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema as StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { StudentCreateManyCompetitionInputEnvelopeObjectSchema as StudentCreateManyCompetitionInputEnvelopeObjectSchema } from './StudentCreateManyCompetitionInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema as StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { StudentUpdateManyWithWhereWithoutCompetitionInputObjectSchema as StudentUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from './StudentUpdateManyWithWhereWithoutCompetitionInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutCompetitionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutCompetitionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutCompetitionNestedInput>;
export const StudentUncheckedUpdateManyWithoutCompetitionNestedInputObjectZodSchema = makeSchema();
