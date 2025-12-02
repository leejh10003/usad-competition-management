import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachUpdateWithoutSchoolInputObjectSchema as CoachUpdateWithoutSchoolInputObjectSchema } from './CoachUpdateWithoutSchoolInput.schema';
import { CoachUncheckedUpdateWithoutSchoolInputObjectSchema as CoachUncheckedUpdateWithoutSchoolInputObjectSchema } from './CoachUncheckedUpdateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CoachUpdateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutSchoolInputObjectSchema)])
}).strict();
export const CoachUpdateWithWhereUniqueWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachUpdateWithWhereUniqueWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateWithWhereUniqueWithoutSchoolInput>;
export const CoachUpdateWithWhereUniqueWithoutSchoolInputObjectZodSchema = makeSchema();
