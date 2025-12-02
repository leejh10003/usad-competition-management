import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutCompetitionInputObjectSchema as StudentCreateWithoutCompetitionInputObjectSchema } from './StudentCreateWithoutCompetitionInput.schema';
import { StudentUncheckedCreateWithoutCompetitionInputObjectSchema as StudentUncheckedCreateWithoutCompetitionInputObjectSchema } from './StudentUncheckedCreateWithoutCompetitionInput.schema';
import { StudentCreateOrConnectWithoutCompetitionInputObjectSchema as StudentCreateOrConnectWithoutCompetitionInputObjectSchema } from './StudentCreateOrConnectWithoutCompetitionInput.schema';
import { StudentCreateManyCompetitionInputEnvelopeObjectSchema as StudentCreateManyCompetitionInputEnvelopeObjectSchema } from './StudentCreateManyCompetitionInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentCreateWithoutCompetitionInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCompetitionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutCompetitionInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutCompetitionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyCompetitionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentCreateNestedManyWithoutCompetitionInputObjectSchema: z.ZodType<Prisma.StudentCreateNestedManyWithoutCompetitionInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateNestedManyWithoutCompetitionInput>;
export const StudentCreateNestedManyWithoutCompetitionInputObjectZodSchema = makeSchema();
