import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolUpdateWithoutStudentsInputObjectSchema as SchoolUpdateWithoutStudentsInputObjectSchema } from './SchoolUpdateWithoutStudentsInput.schema';
import { SchoolUncheckedUpdateWithoutStudentsInputObjectSchema as SchoolUncheckedUpdateWithoutStudentsInputObjectSchema } from './SchoolUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SchoolUpdateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const SchoolUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutStudentsInput>;
export const SchoolUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
