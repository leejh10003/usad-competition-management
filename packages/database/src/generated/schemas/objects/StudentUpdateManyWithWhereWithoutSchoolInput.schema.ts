import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutSchoolInputObjectSchema as StudentUncheckedUpdateManyWithoutSchoolInputObjectSchema } from './StudentUncheckedUpdateManyWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutSchoolInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutSchoolInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutSchoolInput>;
export const StudentUpdateManyWithWhereWithoutSchoolInputObjectZodSchema = makeSchema();
