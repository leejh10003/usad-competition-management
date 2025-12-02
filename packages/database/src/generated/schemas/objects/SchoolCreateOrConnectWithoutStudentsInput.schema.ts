import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutStudentsInputObjectSchema as SchoolCreateWithoutStudentsInputObjectSchema } from './SchoolCreateWithoutStudentsInput.schema';
import { SchoolUncheckedCreateWithoutStudentsInputObjectSchema as SchoolUncheckedCreateWithoutStudentsInputObjectSchema } from './SchoolUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SchoolCreateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const SchoolCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateOrConnectWithoutStudentsInput>;
export const SchoolCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
