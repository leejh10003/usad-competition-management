import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutEventCheckInsInputObjectSchema as StudentCreateWithoutEventCheckInsInputObjectSchema } from './StudentCreateWithoutEventCheckInsInput.schema';
import { StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema as StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedCreateWithoutEventCheckInsInput.schema';
import { StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema as StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema } from './StudentCreateOrConnectWithoutEventCheckInsInput.schema';
import { StudentUpsertWithoutEventCheckInsInputObjectSchema as StudentUpsertWithoutEventCheckInsInputObjectSchema } from './StudentUpsertWithoutEventCheckInsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateToOneWithWhereWithoutEventCheckInsInputObjectSchema as StudentUpdateToOneWithWhereWithoutEventCheckInsInputObjectSchema } from './StudentUpdateToOneWithWhereWithoutEventCheckInsInput.schema';
import { StudentUpdateWithoutEventCheckInsInputObjectSchema as StudentUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUpdateWithoutEventCheckInsInput.schema';
import { StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema as StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedUpdateWithoutEventCheckInsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutEventCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StudentUpdateToOneWithWhereWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUpdateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutEventCheckInsInputObjectSchema)]).optional()
}).strict();
export const StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectSchema: z.ZodType<Prisma.StudentUpdateOneRequiredWithoutEventCheckInsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateOneRequiredWithoutEventCheckInsNestedInput>;
export const StudentUpdateOneRequiredWithoutEventCheckInsNestedInputObjectZodSchema = makeSchema();
