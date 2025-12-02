import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUpdateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedUpdateWithoutPrimaryCoachInput.schema';
import { SchoolCreateWithoutPrimaryCoachInputObjectSchema as SchoolCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateWithoutPrimaryCoachInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SchoolUpdateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema)]),
  create: z.union([z.lazy(() => SchoolCreateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema)]),
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolUpsertWithoutPrimaryCoachInputObjectSchema: z.ZodType<Prisma.SchoolUpsertWithoutPrimaryCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpsertWithoutPrimaryCoachInput>;
export const SchoolUpsertWithoutPrimaryCoachInputObjectZodSchema = makeSchema();
