import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutSchoolInputObjectSchema as StudentUpdateWithoutSchoolInputObjectSchema } from './StudentUpdateWithoutSchoolInput.schema';
import { StudentUncheckedUpdateWithoutSchoolInputObjectSchema as StudentUncheckedUpdateWithoutSchoolInputObjectSchema } from './StudentUncheckedUpdateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutSchoolInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput>;
export const StudentUpdateWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
