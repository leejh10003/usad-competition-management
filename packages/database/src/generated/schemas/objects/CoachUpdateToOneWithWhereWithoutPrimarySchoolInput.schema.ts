import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema';
import { CoachUpdateWithoutPrimarySchoolInputObjectSchema as CoachUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUpdateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedUpdateWithoutPrimarySchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CoachUpdateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema)])
}).strict();
export const CoachUpdateToOneWithWhereWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachUpdateToOneWithWhereWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateToOneWithWhereWithoutPrimarySchoolInput>;
export const CoachUpdateToOneWithWhereWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
