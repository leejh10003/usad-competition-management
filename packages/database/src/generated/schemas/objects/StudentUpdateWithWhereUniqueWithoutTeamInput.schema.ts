import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutTeamInputObjectSchema as StudentUpdateWithoutTeamInputObjectSchema } from './StudentUpdateWithoutTeamInput.schema';
import { StudentUncheckedUpdateWithoutTeamInputObjectSchema as StudentUncheckedUpdateWithoutTeamInputObjectSchema } from './StudentUncheckedUpdateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutTeamInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutTeamInput>;
export const StudentUpdateWithWhereUniqueWithoutTeamInputObjectZodSchema = makeSchema();
