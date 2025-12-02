import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutStudentsInputObjectSchema as CompetitionCreateWithoutStudentsInputObjectSchema } from './CompetitionCreateWithoutStudentsInput.schema';
import { CompetitionUncheckedCreateWithoutStudentsInputObjectSchema as CompetitionUncheckedCreateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedCreateWithoutStudentsInput.schema';
import { CompetitionCreateOrConnectWithoutStudentsInputObjectSchema as CompetitionCreateOrConnectWithoutStudentsInputObjectSchema } from './CompetitionCreateOrConnectWithoutStudentsInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompetitionCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateNestedOneWithoutStudentsInput>;
export const CompetitionCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
