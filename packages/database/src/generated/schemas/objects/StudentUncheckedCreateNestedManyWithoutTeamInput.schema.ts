import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateWithoutTeamInputObjectSchema as StudentCreateWithoutTeamInputObjectSchema } from './StudentCreateWithoutTeamInput.schema';
import { StudentUncheckedCreateWithoutTeamInputObjectSchema as StudentUncheckedCreateWithoutTeamInputObjectSchema } from './StudentUncheckedCreateWithoutTeamInput.schema';
import { StudentCreateOrConnectWithoutTeamInputObjectSchema as StudentCreateOrConnectWithoutTeamInputObjectSchema } from './StudentCreateOrConnectWithoutTeamInput.schema';
import { StudentCreateManyTeamInputEnvelopeObjectSchema as StudentCreateManyTeamInputEnvelopeObjectSchema } from './StudentCreateManyTeamInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentCreateWithoutTeamInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutTeamInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutTeamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyTeamInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedCreateNestedManyWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutTeamInput>;
export const StudentUncheckedCreateNestedManyWithoutTeamInputObjectZodSchema = makeSchema();
