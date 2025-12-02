import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutSchoolsInputObjectSchema as CompetitionCreateWithoutSchoolsInputObjectSchema } from './CompetitionCreateWithoutSchoolsInput.schema';
import { CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema as CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedCreateWithoutSchoolsInput.schema';
import { CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema as CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema } from './CompetitionCreateOrConnectWithoutSchoolsInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompetitionCreateNestedOneWithoutSchoolsInputObjectSchema: z.ZodType<Prisma.CompetitionCreateNestedOneWithoutSchoolsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionCreateNestedOneWithoutSchoolsInput>;
export const CompetitionCreateNestedOneWithoutSchoolsInputObjectZodSchema = makeSchema();
