import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutCompetitionInputObjectSchema as StudentCreateWithoutCompetitionInputObjectSchema } from './StudentCreateWithoutCompetitionInput.schema';
import { StudentUncheckedCreateWithoutCompetitionInputObjectSchema as StudentUncheckedCreateWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateWithoutCompetitionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutCompetitionInput>;
export const StudentCreateOrConnectWithoutCompetitionInputObjectZodSchema = makeSchema();
