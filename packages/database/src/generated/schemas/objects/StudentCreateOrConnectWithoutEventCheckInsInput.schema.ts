import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutEventCheckInsInputObjectSchema as StudentCreateWithoutEventCheckInsInputObjectSchema } from './StudentCreateWithoutEventCheckInsInput.schema';
import { StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema as StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema } from './StudentUncheckedCreateWithoutEventCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutEventCheckInsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutEventCheckInsInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutEventCheckInsInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutEventCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutEventCheckInsInput>;
export const StudentCreateOrConnectWithoutEventCheckInsInputObjectZodSchema = makeSchema();
