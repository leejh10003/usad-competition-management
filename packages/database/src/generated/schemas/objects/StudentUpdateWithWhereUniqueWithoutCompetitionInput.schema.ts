import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutCompetitionInputObjectSchema as StudentUpdateWithoutCompetitionInputObjectSchema } from './StudentUpdateWithoutCompetitionInput.schema';
import { StudentUncheckedUpdateWithoutCompetitionInputObjectSchema as StudentUncheckedUpdateWithoutCompetitionInputObjectSchema } from './StudentUncheckedUpdateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutCompetitionInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutCompetitionInput>;
export const StudentUpdateWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
