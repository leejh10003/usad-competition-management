import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachCreateWithoutPrimarySchoolInputObjectSchema as CoachCreateWithoutPrimarySchoolInputObjectSchema } from './CoachCreateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedCreateWithoutPrimarySchoolInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CoachWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CoachCreateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema)])
}).strict();
export const CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateOrConnectWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateOrConnectWithoutPrimarySchoolInput>;
export const CoachCreateOrConnectWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
