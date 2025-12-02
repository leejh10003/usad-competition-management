import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutSchoolInputObjectSchema as StudentCreateWithoutSchoolInputObjectSchema } from './StudentCreateWithoutSchoolInput.schema';
import { StudentUncheckedCreateWithoutSchoolInputObjectSchema as StudentUncheckedCreateWithoutSchoolInputObjectSchema } from './StudentUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutSchoolInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutSchoolInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutSchoolInput>;
export const StudentCreateOrConnectWithoutSchoolInputObjectZodSchema = makeSchema();
