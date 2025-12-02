import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutSchoolInputObjectSchema as CoachCreateWithoutSchoolInputObjectSchema } from './CoachCreateWithoutSchoolInput.schema';
import { CoachUncheckedCreateWithoutSchoolInputObjectSchema as CoachUncheckedCreateWithoutSchoolInputObjectSchema } from './CoachUncheckedCreateWithoutSchoolInput.schema';
import { CoachCreateOrConnectWithoutSchoolInputObjectSchema as CoachCreateOrConnectWithoutSchoolInputObjectSchema } from './CoachCreateOrConnectWithoutSchoolInput.schema';
import { CoachCreateManySchoolInputEnvelopeObjectSchema as CoachCreateManySchoolInputEnvelopeObjectSchema } from './CoachCreateManySchoolInputEnvelope.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CoachCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => CoachCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CoachCreateManySchoolInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CoachWhereUniqueInputObjectSchema), z.lazy(() => CoachWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CoachUncheckedCreateNestedManyWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUncheckedCreateNestedManyWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUncheckedCreateNestedManyWithoutSchoolInput>;
export const CoachUncheckedCreateNestedManyWithoutSchoolInputObjectZodSchema = makeSchema();
