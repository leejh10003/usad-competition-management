import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutSchoolInputObjectSchema as StudentCreateWithoutSchoolInputObjectSchema } from './StudentCreateWithoutSchoolInput.schema';
import { StudentUncheckedCreateWithoutSchoolInputObjectSchema as StudentUncheckedCreateWithoutSchoolInputObjectSchema } from './StudentUncheckedCreateWithoutSchoolInput.schema';
import { StudentCreateOrConnectWithoutSchoolInputObjectSchema as StudentCreateOrConnectWithoutSchoolInputObjectSchema } from './StudentCreateOrConnectWithoutSchoolInput.schema';
import { StudentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema as StudentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutSchoolInput.schema';
import { StudentCreateManySchoolInputEnvelopeObjectSchema as StudentCreateManySchoolInputEnvelopeObjectSchema } from './StudentCreateManySchoolInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema as StudentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutSchoolInput.schema';
import { StudentUpdateManyWithWhereWithoutSchoolInputObjectSchema as StudentUpdateManyWithWhereWithoutSchoolInputObjectSchema } from './StudentUpdateManyWithWhereWithoutSchoolInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManySchoolInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutSchoolInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutSchoolInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutSchoolNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutSchoolNestedInput>;
export const StudentUncheckedUpdateManyWithoutSchoolNestedInputObjectZodSchema = makeSchema();
