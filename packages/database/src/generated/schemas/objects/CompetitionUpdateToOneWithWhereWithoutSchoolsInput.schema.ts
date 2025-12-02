import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereInputObjectSchema as CompetitionWhereInputObjectSchema } from './CompetitionWhereInput.schema';
import { CompetitionUpdateWithoutSchoolsInputObjectSchema as CompetitionUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUpdateWithoutSchoolsInput.schema';
import { CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema as CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutSchoolsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompetitionUpdateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema)])
}).strict();
export const CompetitionUpdateToOneWithWhereWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateToOneWithWhereWithoutSchoolsInput>;
export const CompetitionUpdateToOneWithWhereWithoutSchoolsInputObjectZodSchema = makeSchema();
