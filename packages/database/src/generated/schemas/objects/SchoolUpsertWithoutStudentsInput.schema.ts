import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUpdateWithoutStudentsInputObjectSchema as SchoolUpdateWithoutStudentsInputObjectSchema } from './SchoolUpdateWithoutStudentsInput.schema';
import { SchoolUncheckedUpdateWithoutStudentsInputObjectSchema as SchoolUncheckedUpdateWithoutStudentsInputObjectSchema } from './SchoolUncheckedUpdateWithoutStudentsInput.schema';
import { SchoolCreateWithoutStudentsInputObjectSchema as SchoolCreateWithoutStudentsInputObjectSchema } from './SchoolCreateWithoutStudentsInput.schema';
import { SchoolUncheckedCreateWithoutStudentsInputObjectSchema as SchoolUncheckedCreateWithoutStudentsInputObjectSchema } from './SchoolUncheckedCreateWithoutStudentsInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SchoolUpdateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => SchoolCreateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpsertWithoutStudentsInput>;
export const SchoolUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
