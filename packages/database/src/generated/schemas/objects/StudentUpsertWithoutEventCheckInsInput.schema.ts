import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentUpdateWithoutEventCheckInsInputObjectSchema as StudentUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUpdateWithoutEventCheckInsInput.schema';
import { StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema as StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedUpdateWithoutEventCheckInsInput.schema';
import { StudentCreateWithoutEventCheckInsInputObjectSchema as StudentCreateWithoutEventCheckInsInputObjectSchema } from './StudentCreateWithoutEventCheckInsInput.schema';
import { StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema as StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedCreateWithoutEventCheckInsInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StudentUpdateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema)]),
  where: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const StudentUpsertWithoutEventCheckInsInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithoutEventCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithoutEventCheckInsInput>;
export const StudentUpsertWithoutEventCheckInsInputObjectZodSchema = makeSchema();
