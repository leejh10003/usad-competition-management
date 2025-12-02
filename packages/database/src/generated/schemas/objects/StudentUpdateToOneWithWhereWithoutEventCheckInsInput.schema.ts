import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema';
import { StudentUpdateWithoutEventCheckInsInputObjectSchema as StudentUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUpdateWithoutEventCheckInsInput.schema';
import { StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema as StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedUpdateWithoutEventCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StudentUpdateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema)])
}).strict();
export const StudentUpdateToOneWithWhereWithoutEventCheckInsInputObjectSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutEventCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutEventCheckInsInput>;
export const StudentUpdateToOneWithWhereWithoutEventCheckInsInputObjectZodSchema = makeSchema();
