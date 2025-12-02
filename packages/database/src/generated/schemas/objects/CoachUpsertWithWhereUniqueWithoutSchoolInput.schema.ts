import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachUpdateWithoutSchoolInputObjectSchema as CoachUpdateWithoutSchoolInputObjectSchema } from './CoachUpdateWithoutSchoolInput.schema';
import { CoachUncheckedUpdateWithoutSchoolInputObjectSchema as CoachUncheckedUpdateWithoutSchoolInputObjectSchema } from './CoachUncheckedUpdateWithoutSchoolInput.schema';
import { CoachCreateWithoutSchoolInputObjectSchema as CoachCreateWithoutSchoolInputObjectSchema } from './CoachCreateWithoutSchoolInput.schema';
import { CoachUncheckedCreateWithoutSchoolInputObjectSchema as CoachUncheckedCreateWithoutSchoolInputObjectSchema } from './CoachUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CoachUpdateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutSchoolInputObjectSchema)]),
  create: z.union([z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const CoachUpsertWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUpsertWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpsertWithWhereUniqueWithoutSchoolInput>;
export const CoachUpsertWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
