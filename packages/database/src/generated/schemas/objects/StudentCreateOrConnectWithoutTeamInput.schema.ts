import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutTeamInputObjectSchema as StudentCreateWithoutTeamInputObjectSchema } from './StudentCreateWithoutTeamInput.schema';
import { StudentUncheckedCreateWithoutTeamInputObjectSchema as StudentUncheckedCreateWithoutTeamInputObjectSchema } from './StudentUncheckedCreateWithoutTeamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutTeamInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutTeamInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutTeamInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutTeamInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutTeamInput>;
export const StudentCreateOrConnectWithoutTeamInputObjectZodSchema = makeSchema();
