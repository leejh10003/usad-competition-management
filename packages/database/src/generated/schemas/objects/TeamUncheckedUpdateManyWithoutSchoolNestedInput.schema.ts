import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamCreateWithoutSchoolInputObjectSchema as TeamCreateWithoutSchoolInputObjectSchema } from './TeamCreateWithoutSchoolInput.schema';
import { TeamUncheckedCreateWithoutSchoolInputObjectSchema as TeamUncheckedCreateWithoutSchoolInputObjectSchema } from './TeamUncheckedCreateWithoutSchoolInput.schema';
import { TeamCreateOrConnectWithoutSchoolInputObjectSchema as TeamCreateOrConnectWithoutSchoolInputObjectSchema } from './TeamCreateOrConnectWithoutSchoolInput.schema';
import { TeamUpsertWithWhereUniqueWithoutSchoolInputObjectSchema as TeamUpsertWithWhereUniqueWithoutSchoolInputObjectSchema } from './TeamUpsertWithWhereUniqueWithoutSchoolInput.schema';
import { TeamCreateManySchoolInputEnvelopeObjectSchema as TeamCreateManySchoolInputEnvelopeObjectSchema } from './TeamCreateManySchoolInputEnvelope.schema';
import { TeamWhereUniqueInputObjectSchema as TeamWhereUniqueInputObjectSchema } from './TeamWhereUniqueInput.schema';
import { TeamUpdateWithWhereUniqueWithoutSchoolInputObjectSchema as TeamUpdateWithWhereUniqueWithoutSchoolInputObjectSchema } from './TeamUpdateWithWhereUniqueWithoutSchoolInput.schema';
import { TeamUpdateManyWithWhereWithoutSchoolInputObjectSchema as TeamUpdateManyWithWhereWithoutSchoolInputObjectSchema } from './TeamUpdateManyWithWhereWithoutSchoolInput.schema';
import { TeamScalarWhereInputObjectSchema as TeamScalarWhereInputObjectSchema } from './TeamScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => TeamCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TeamUpsertWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCreateManySchoolInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TeamWhereUniqueInputObjectSchema), z.lazy(() => TeamWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TeamWhereUniqueInputObjectSchema), z.lazy(() => TeamWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TeamWhereUniqueInputObjectSchema), z.lazy(() => TeamWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TeamWhereUniqueInputObjectSchema), z.lazy(() => TeamWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TeamUpdateWithWhereUniqueWithoutSchoolInputObjectSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutSchoolInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TeamUpdateManyWithWhereWithoutSchoolInputObjectSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutSchoolInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TeamScalarWhereInputObjectSchema), z.lazy(() => TeamScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TeamUncheckedUpdateManyWithoutSchoolNestedInputObjectSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutSchoolNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutSchoolNestedInput>;
export const TeamUncheckedUpdateManyWithoutSchoolNestedInputObjectZodSchema = makeSchema();
