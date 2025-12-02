import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionUpdateWithoutStudentsInputObjectSchema as CompetitionUpdateWithoutStudentsInputObjectSchema } from './CompetitionUpdateWithoutStudentsInput.schema';
import { CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema as CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutStudentsInput.schema';
import { CompetitionCreateWithoutStudentsInputObjectSchema as CompetitionCreateWithoutStudentsInputObjectSchema } from './CompetitionCreateWithoutStudentsInput.schema';
import { CompetitionUncheckedCreateWithoutStudentsInputObjectSchema as CompetitionUncheckedCreateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedCreateWithoutStudentsInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompetitionUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompetitionCreateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional()
}).strict();
export const CompetitionUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpsertWithoutStudentsInput>;
export const CompetitionUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
