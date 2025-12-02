import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CoachCreateWithoutPrimarySchoolInputObjectSchema as CoachCreateWithoutPrimarySchoolInputObjectSchema } from './CoachCreateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedCreateWithoutPrimarySchoolInput.schema';
import { CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema as CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema } from './CoachCreateOrConnectWithoutPrimarySchoolInput.schema';
import { CoachUpsertWithoutPrimarySchoolInputObjectSchema as CoachUpsertWithoutPrimarySchoolInputObjectSchema } from './CoachUpsertWithoutPrimarySchoolInput.schema';
import { CoachWhereInputObjectSchema as CoachWhereInputObjectSchema } from './CoachWhereInput.schema';
import { CoachWhereUniqueInputObjectSchema as CoachWhereUniqueInputObjectSchema } from './CoachWhereUniqueInput.schema';
import { CoachUpdateToOneWithWhereWithoutPrimarySchoolInputObjectSchema as CoachUpdateToOneWithWhereWithoutPrimarySchoolInputObjectSchema } from './CoachUpdateToOneWithWhereWithoutPrimarySchoolInput.schema';
import { CoachUpdateWithoutPrimarySchoolInputObjectSchema as CoachUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUpdateWithoutPrimarySchoolInput.schema';
import { CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema as CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema } from './CoachUncheckedUpdateWithoutPrimarySchoolInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CoachCreateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedCreateWithoutPrimarySchoolInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CoachCreateOrConnectWithoutPrimarySchoolInputObjectSchema).optional(),
  upsert: z.lazy(() => CoachUpsertWithoutPrimarySchoolInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CoachWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CoachWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CoachWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CoachUpdateToOneWithWhereWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUpdateWithoutPrimarySchoolInputObjectSchema), z.lazy(() => CoachUncheckedUpdateWithoutPrimarySchoolInputObjectSchema)]).optional()
}).strict();
export const CoachUpdateOneWithoutPrimarySchoolNestedInputObjectSchema: z.ZodType<Prisma.CoachUpdateOneWithoutPrimarySchoolNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CoachUpdateOneWithoutPrimarySchoolNestedInput>;
export const CoachUpdateOneWithoutPrimarySchoolNestedInputObjectZodSchema = makeSchema();
