import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutStudentsInputObjectSchema as SchoolCreateWithoutStudentsInputObjectSchema } from './SchoolCreateWithoutStudentsInput.schema';
import { SchoolUncheckedCreateWithoutStudentsInputObjectSchema as SchoolUncheckedCreateWithoutStudentsInputObjectSchema } from './SchoolUncheckedCreateWithoutStudentsInput.schema';
import { SchoolCreateOrConnectWithoutStudentsInputObjectSchema as SchoolCreateOrConnectWithoutStudentsInputObjectSchema } from './SchoolCreateOrConnectWithoutStudentsInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional()
}).strict();
export const SchoolCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateNestedOneWithoutStudentsInput>;
export const SchoolCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
