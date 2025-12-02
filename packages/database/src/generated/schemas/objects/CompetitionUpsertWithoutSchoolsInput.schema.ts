import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionUpdateWithoutSchoolsInputObjectSchema as CompetitionUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUpdateWithoutSchoolsInput.schema';
import { CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema as CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutSchoolsInput.schema';
import { CompetitionCreateWithoutSchoolsInputObjectSchema as CompetitionCreateWithoutSchoolsInputObjectSchema } from './CompetitionCreateWithoutSchoolsInput.schema';
import { CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema as CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedCreateWithoutSchoolsInput.schema';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompetitionUpdateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompetitionCreateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema)]),
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional()
}).strict();
export const CompetitionUpsertWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionUpsertWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpsertWithoutSchoolsInput>;
export const CompetitionUpsertWithoutSchoolsInputObjectZodSchema = makeSchema();
