import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutStudentsInputObjectSchema as SchoolCreateWithoutStudentsInputObjectSchema } from './SchoolCreateWithoutStudentsInput.schema';
import { SchoolUncheckedCreateWithoutStudentsInputObjectSchema as SchoolUncheckedCreateWithoutStudentsInputObjectSchema } from './SchoolUncheckedCreateWithoutStudentsInput.schema';
import { SchoolCreateOrConnectWithoutStudentsInputObjectSchema as SchoolCreateOrConnectWithoutStudentsInputObjectSchema } from './SchoolCreateOrConnectWithoutStudentsInput.schema';
import { SchoolUpsertWithoutStudentsInputObjectSchema as SchoolUpsertWithoutStudentsInputObjectSchema } from './SchoolUpsertWithoutStudentsInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateToOneWithWhereWithoutStudentsInputObjectSchema as SchoolUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './SchoolUpdateToOneWithWhereWithoutStudentsInput.schema';
import { SchoolUpdateWithoutStudentsInputObjectSchema as SchoolUpdateWithoutStudentsInputObjectSchema } from './SchoolUpdateWithoutStudentsInput.schema';
import { SchoolUncheckedUpdateWithoutStudentsInputObjectSchema as SchoolUncheckedUpdateWithoutStudentsInputObjectSchema } from './SchoolUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => SchoolUpsertWithoutStudentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SchoolUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUpdateWithoutStudentsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const SchoolUpdateOneWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.SchoolUpdateOneWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateOneWithoutStudentsNestedInput>;
export const SchoolUpdateOneWithoutStudentsNestedInputObjectZodSchema = makeSchema();
