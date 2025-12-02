import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutSchoolsInputObjectSchema as CompetitionCreateWithoutSchoolsInputObjectSchema } from './CompetitionCreateWithoutSchoolsInput.schema';
import { CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema as CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedCreateWithoutSchoolsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompetitionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompetitionCreateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema)])
}).strict();
export const CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateOrConnectWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateOrConnectWithoutSchoolsInput>;
export const CompetitionCreateOrConnectWithoutSchoolsInputObjectZodSchema = makeSchema();
