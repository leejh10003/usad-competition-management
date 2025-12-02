import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutEventCheckInsInputObjectSchema as StudentCreateWithoutEventCheckInsInputObjectSchema } from './StudentCreateWithoutEventCheckInsInput.schema';
import { StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema as StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedCreateWithoutEventCheckInsInput.schema';
import { StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema as StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema } from './StudentCreateOrConnectWithoutEventCheckInsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional()
}).strict();
export const StudentCreateNestedOneWithoutEventCheckInsInputObjectSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutEventCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateNestedOneWithoutEventCheckInsInput>;
export const StudentCreateNestedOneWithoutEventCheckInsInputObjectZodSchema = makeSchema();
