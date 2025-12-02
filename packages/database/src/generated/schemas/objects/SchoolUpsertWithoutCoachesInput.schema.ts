import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUpdateWithoutCoachesInputObjectSchema as SchoolUpdateWithoutCoachesInputObjectSchema } from './SchoolUpdateWithoutCoachesInput.schema';
import { SchoolUncheckedUpdateWithoutCoachesInputObjectSchema as SchoolUncheckedUpdateWithoutCoachesInputObjectSchema } from './SchoolUncheckedUpdateWithoutCoachesInput.schema';
import { SchoolCreateWithoutCoachesInputObjectSchema as SchoolCreateWithoutCoachesInputObjectSchema } from './SchoolCreateWithoutCoachesInput.schema';
import { SchoolUncheckedCreateWithoutCoachesInputObjectSchema as SchoolUncheckedCreateWithoutCoachesInputObjectSchema } from './SchoolUncheckedCreateWithoutCoachesInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SchoolUpdateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutCoachesInputObjectSchema)]),
  create: z.union([z.lazy(() => SchoolCreateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCoachesInputObjectSchema)]),
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolUpsertWithoutCoachesInputObjectSchema: z.ZodType<Prisma.SchoolUpsertWithoutCoachesInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpsertWithoutCoachesInput>;
export const SchoolUpsertWithoutCoachesInputObjectZodSchema = makeSchema();
