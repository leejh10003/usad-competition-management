import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachUpdateWithoutPrimarySchoolInputObjectSchema as CoachUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUpdateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedUpdateWithoutPrimarySchoolInput.schema';
import { CoachCreateWithoutPrimarySchoolInputObjectSchema as CoachCreateWithoutPrimarySchoolInputObjectSchema } from './CoachCreateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedCreateWithoutPrimarySchoolInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CoachUpdateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema)]),
  create: z.union([z.lazy(() => CoachCreateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema)]),
  where: z.lazy(() => CoachWhereInputObjectSchema).optional()
}).strict();
export const CoachUpsertWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachUpsertWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpsertWithoutPrimarySchoolInput>;
export const CoachUpsertWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
