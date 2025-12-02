import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutTeamInputObjectSchema as StudentUncheckedUpdateManyWithoutTeamInputObjectSchema } from './StudentUncheckedUpdateManyWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutTeamInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutTeamInput>;
export const StudentUpdateManyWithWhereWithoutTeamInputObjectZodSchema = makeSchema();
