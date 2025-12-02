import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './StudentUpdateManyMutationInput.schema';
import { StudentUncheckedUpdateManyWithoutCompetitionInputObjectSchema as StudentUncheckedUpdateManyWithoutCompetitionInputObjectSchema } from './StudentUncheckedUpdateManyWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateManyMutationInputObjectSchema), z.lazy(() => StudentUncheckedUpdateManyWithoutCompetitionInputObjectSchema)])
}).strict();
export const StudentUpdateManyWithWhereWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutCompetitionInput>;
export const StudentUpdateManyWithWhereWithoutCompetitionInputObjectZodSchema = makeSchema();
