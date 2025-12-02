import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutStudentsInputObjectSchema as CompetitionCreateWithoutStudentsInputObjectSchema } from './CompetitionCreateWithoutStudentsInput.schema';
import { CompetitionUncheckedCreateWithoutStudentsInputObjectSchema as CompetitionUncheckedCreateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedCreateWithoutStudentsInput.schema';
import { CompetitionCreateOrConnectWithoutStudentsInputObjectSchema as CompetitionCreateOrConnectWithoutStudentsInputObjectSchema } from './CompetitionCreateOrConnectWithoutStudentsInput.schema';
import { CompetitionUpsertWithoutStudentsInputObjectSchema as CompetitionUpsertWithoutStudentsInputObjectSchema } from './CompetitionUpsertWithoutStudentsInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateToOneWithWhereWithoutStudentsInputObjectSchema as CompetitionUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './CompetitionUpdateToOneWithWhereWithoutStudentsInput.schema';
import { CompetitionUpdateWithoutStudentsInputObjectSchema as CompetitionUpdateWithoutStudentsInputObjectSchema } from './CompetitionUpdateWithoutStudentsInput.schema';
import { CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema as CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompetitionUpsertWithoutStudentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CompetitionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CompetitionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompetitionUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const CompetitionUpdateOneWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateOneWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateOneWithoutStudentsNestedInput>;
export const CompetitionUpdateOneWithoutStudentsNestedInputObjectZodSchema = makeSchema();
