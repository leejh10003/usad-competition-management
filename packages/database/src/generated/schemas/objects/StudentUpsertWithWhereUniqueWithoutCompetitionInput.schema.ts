import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutCompetitionInputObjectSchema as StudentUpdateWithoutCompetitionInputObjectSchema } from './StudentUpdateWithoutCompetitionInput.schema';
import { StudentUncheckedUpdateWithoutCompetitionInputObjectSchema as StudentUncheckedUpdateWithoutCompetitionInputObjectSchema } from './StudentUncheckedUpdateWithoutCompetitionInput.schema';
import { StudentCreateWithoutCompetitionInputObjectSchema as StudentCreateWithoutCompetitionInputObjectSchema } from './StudentCreateWithoutCompetitionInput.schema';
import { StudentUncheckedCreateWithoutCompetitionInputObjectSchema as StudentUncheckedCreateWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutCompetitionInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutCompetitionInput>;
export const StudentUpsertWithWhereUniqueWithoutCompetitionInputObjectZodSchema = makeSchema();
