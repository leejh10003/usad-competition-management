import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutPrimarySchoolInputObjectSchema as CoachCreateWithoutPrimarySchoolInputObjectSchema } from './CoachCreateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedCreateWithoutPrimarySchoolInput.schema';
import { CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema as CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema } from './CoachCreateOrConnectWithoutPrimarySchoolInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema).optional(),
  connect: z.lazy(() => CoachWhereUniqueInputObjectSchema).optional()
}).strict();
export const CoachCreateNestedOneWithoutPrimarySchoolInputObjectSchema: z.ZodType<Prisma.CoachCreateNestedOneWithoutPrimarySchoolInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachCreateNestedOneWithoutPrimarySchoolInput>;
export const CoachCreateNestedOneWithoutPrimarySchoolInputObjectZodSchema = makeSchema();
