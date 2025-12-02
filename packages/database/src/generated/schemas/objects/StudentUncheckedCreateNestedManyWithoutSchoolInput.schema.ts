import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutSchoolInputObjectSchema as StudentCreateWithoutSchoolInputObjectSchema } from './StudentCreateWithoutSchoolInput.schema';
import { StudentUncheckedCreateWithoutSchoolInputObjectSchema as StudentUncheckedCreateWithoutSchoolInputObjectSchema } from './StudentUncheckedCreateWithoutSchoolInput.schema';
import { StudentCreateOrConnectWithoutSchoolInputObjectSchema as StudentCreateOrConnectWithoutSchoolInputObjectSchema } from './StudentCreateOrConnectWithoutSchoolInput.schema';
import { StudentCreateManySchoolInputEnvelopeObjectSchema as StudentCreateManySchoolInputEnvelopeObjectSchema } from './StudentCreateManySchoolInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutSchoolInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutSchoolInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManySchoolInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedCreateNestedManyWithoutSchoolInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutSchoolInput>;
export const StudentUncheckedCreateNestedManyWithoutSchoolInputObjectZodSchema = makeSchema();
