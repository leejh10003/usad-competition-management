import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutTeamInputObjectSchema as StudentUpdateWithoutTeamInputObjectSchema } from './StudentUpdateWithoutTeamInput.schema';
import { StudentUncheckedUpdateWithoutTeamInputObjectSchema as StudentUncheckedUpdateWithoutTeamInputObjectSchema } from './StudentUncheckedUpdateWithoutTeamInput.schema';
import { StudentCreateWithoutTeamInputObjectSchema as StudentCreateWithoutTeamInputObjectSchema } from './StudentCreateWithoutTeamInput.schema';
import { StudentUncheckedCreateWithoutTeamInputObjectSchema as StudentUncheckedCreateWithoutTeamInputObjectSchema } from './StudentUncheckedCreateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutTeamInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutTeamInput>;
export const StudentUpsertWithWhereUniqueWithoutTeamInputObjectZodSchema = makeSchema();
