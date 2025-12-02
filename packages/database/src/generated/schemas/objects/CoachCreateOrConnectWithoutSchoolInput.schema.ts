import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachCreateWithoutSchoolInputObjectSchema as CoachCreateWithoutSchoolInputObjectSchema } from './CoachCreateWithoutSchoolInput.schema';
import { CoachUncheckedCreateWithoutSchoolInputObjectSchema as CoachUncheckedCreateWithoutSchoolInputObjectSchema } from './CoachUncheckedCreateWithoutSchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CoachCreateWithoutSchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutSchoolInputObjectSchema)])
}).strict();
export const CoachCreateOrConnectWithoutSchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateOrConnectWithoutSchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateOrConnectWithoutSchoolInput>;
export const CoachCreateOrConnectWithoutSchoolInputObjectZodSchema = makeSchema();
