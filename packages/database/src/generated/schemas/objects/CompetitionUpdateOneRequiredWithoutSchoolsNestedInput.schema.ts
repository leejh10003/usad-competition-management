import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutSchoolsInputObjectSchema as CompetitionCreateWithoutSchoolsInputObjectSchema } from './CompetitionCreateWithoutSchoolsInput.schema';
import { CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema as CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedCreateWithoutSchoolsInput.schema';
import { CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema as CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema } from './CompetitionCreateOrConnectWithoutSchoolsInput.schema';
import { CompetitionUpsertWithoutSchoolsInputObjectSchema as CompetitionUpsertWithoutSchoolsInputObjectSchema } from './CompetitionUpsertWithoutSchoolsInput.schema';
import { CompetitionWhereUniqueInputObjectSchema as CompetitionWhereUniqueInputObjectSchema } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateToOneWithWhereWithoutSchoolsInputObjectSchema as CompetitionUpdateToOneWithWhereWithoutSchoolsInputObjectSchema } from './CompetitionUpdateToOneWithWhereWithoutSchoolsInput.schema';
import { CompetitionUpdateWithoutSchoolsInputObjectSchema as CompetitionUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUpdateWithoutSchoolsInput.schema';
import { CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema as CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema } from './CompetitionUncheckedUpdateWithoutSchoolsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompetitionCreateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedCreateWithoutSchoolsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompetitionCreateOrConnectWithoutSchoolsInputObjectSchema).optional(),
  upsert: z.lazy(() => CompetitionUpsertWithoutSchoolsInputObjectSchema).optional(),
  connect: z.lazy(() => CompetitionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompetitionUpdateToOneWithWhereWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUpdateWithoutSchoolsInputObjectSchema), z.lazy(() => CompetitionUncheckedUpdateWithoutSchoolsInputObjectSchema)]).optional()
}).strict();
export const CompetitionUpdateOneRequiredWithoutSchoolsNestedInputObjectSchema: z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutSchoolsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompetitionUpdateOneRequiredWithoutSchoolsNestedInput>;
export const CompetitionUpdateOneRequiredWithoutSchoolsNestedInputObjectZodSchema = makeSchema();
