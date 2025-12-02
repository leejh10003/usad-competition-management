import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutTeamInputObjectSchema as StudentCreateWithoutTeamInputObjectSchema } from './StudentCreateWithoutTeamInput.schema';
import { StudentUncheckedCreateWithoutTeamInputObjectSchema as StudentUncheckedCreateWithoutTeamInputObjectSchema } from './StudentUncheckedCreateWithoutTeamInput.schema';
import { StudentCreateOrConnectWithoutTeamInputObjectSchema as StudentCreateOrConnectWithoutTeamInputObjectSchema } from './StudentCreateOrConnectWithoutTeamInput.schema';
import { StudentUpsertWithWhereUniqueWithoutTeamInputObjectSchema as StudentUpsertWithWhereUniqueWithoutTeamInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutTeamInput.schema';
import { StudentCreateManyTeamInputEnvelopeObjectSchema as StudentCreateManyTeamInputEnvelopeObjectSchema } from './StudentCreateManyTeamInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutTeamInputObjectSchema as StudentUpdateWithWhereUniqueWithoutTeamInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutTeamInput.schema';
import { StudentUpdateManyWithWhereWithoutTeamInputObjectSchema as StudentUpdateManyWithWhereWithoutTeamInputObjectSchema } from './StudentUpdateManyWithWhereWithoutTeamInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyTeamInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutTeamInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutTeamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutTeamInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutTeamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedUpdateManyWithoutTeamNestedInputObjectSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutTeamNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutTeamNestedInput>;
export const StudentUncheckedUpdateManyWithoutTeamNestedInputObjectZodSchema = makeSchema();
