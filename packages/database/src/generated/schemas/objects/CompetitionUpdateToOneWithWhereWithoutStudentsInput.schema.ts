import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { CompetitionUpdateWithoutStudentsInputObjectSchema as CompetitionUpdateWithoutStudentsInputObjectSchema } from './CompetitionUpdateWithoutStudentsInput.schema';
import { CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema as CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompetitionUpdateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const CompetitionUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutStudentsInput>;
export const CompetitionUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
