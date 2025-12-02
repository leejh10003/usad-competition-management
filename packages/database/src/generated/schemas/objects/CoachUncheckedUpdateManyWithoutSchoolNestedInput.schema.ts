import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutSchoolInputObjectSchema as CoachCreateWithoutSchoolInputObjectSchema } from './CoachCreateWithoutSchoolInput.schema';
import { CoachUncheckedCreateWithoutSchoolInputObjectSchema as CoachUncheckedCreateWithoutSchoolInputObjectSchema } from './CoachUncheckedCreateWithoutSchoolInput.schema';
import { CoachCreateOrConnectWithoutSchoolInputObjectSchema as CoachCreateOrConnectWithoutSchoolInputObjectSchema } from './CoachCreateOrConnectWithoutSchoolInput.schema';
import { CoachUpsertWithWhereUniqueWithoutSchoolInputObjectSchema as CoachUpsertWithWhereUniqueWithoutSchoolInputObjectSchema } from './CoachUpsertWithWhereUniqueWithoutSchoolInput.schema';
import { CoachCreateManySchoolInputEnvelopeObjectSchema as CoachCreateManySchoolInputEnvelopeObjectSchema } from './CoachCreateManySchoolInputEnvelope.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachUpdateWithWhereUniqueWithoutSchoolInputObjectSchema as CoachUpdateWithWhereUniqueWithoutSchoolInputObjectSchema } from './CoachUpdateWithWhereUniqueWithoutSchoolInput.schema';
import { CoachUpdateManyWithWhereWithoutSchoolInputObjectSchema as CoachUpdateManyWithWhereWithoutSchoolInputObjectSchema } from './CoachUpdateManyWithWhereWithoutSchoolInput.schema';
import { CoachScalarWhereInputObjectSchema as CoachScalarWhereInputObjectSchema } from './CoachScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CoachCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => CoachCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CoachUpsertWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => CoachUpsertWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CoachCreateManySchoolInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CoachWhereUniqueInputObjectSchema), z.lazy(() => CoachWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CoachWhereUniqueInputObjectSchema), z.lazy(() => CoachWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CoachWhereUniqueInputObjectSchema), z.lazy(() => CoachWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CoachWhereUniqueInputObjectSchema), z.lazy(() => CoachWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CoachUpdateWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => CoachUpdateWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CoachUpdateManyWithWhereWithoutSchoolInputObjectSchema), z.lazy(() => CoachUpdateManyWithWhereWithoutSchoolInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CoachScalarWhereInputObjectSchema), z.lazy(() => CoachScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CoachUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema: z.ZodType<Prisma.CoachUncheckedUpdateManyWithoutSchoolNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedUpdateManyWithoutSchoolNestedInput>;
export const CoachUncheckedUpdateManyWithoutSchoolNestedInputObjectZodSchema = makeSchema();
