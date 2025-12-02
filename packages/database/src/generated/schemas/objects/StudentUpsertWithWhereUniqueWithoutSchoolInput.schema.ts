import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutSchoolInputObjectSchema as StudentUpdateWithoutSchoolInputObjectSchema } from './StudentUpdateWithoutSchoolInput.schema';
import { StudentUncheckedUpdateWithoutSchoolInputObjectSchema as StudentUncheckedUpdateWithoutSchoolInputObjectSchema } from './StudentUncheckedUpdateWithoutSchoolInput.schema';
import { StudentCreateWithoutSchoolInputObjectSchema as StudentCreateWithoutSchoolInputObjectSchema } from './StudentCreateWithoutSchoolInput.schema';
import { StudentUncheckedCreateWithoutSchoolInputObjectSchema as StudentUncheckedCreateWithoutSchoolInputObjectSchema } from './StudentUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutSchoolInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput>;
export const StudentUpsertWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
