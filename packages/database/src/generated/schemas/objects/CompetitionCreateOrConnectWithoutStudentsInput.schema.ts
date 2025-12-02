import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutStudentsInputObjectSchema as CompetitionCreateWithoutStudentsInputObjectSchema } from './CompetitionCreateWithoutStudentsInput.schema';
import { CompetitionUncheckedCreateWithoutStudentsInputObjectSchema as CompetitionUncheckedCreateWithoutStudentsInputObjectSchema } from './CompetitionUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompetitionCreateWithoutStudentsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const CompetitionCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateOrConnectWithoutStudentsInput>;
export const CompetitionCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
