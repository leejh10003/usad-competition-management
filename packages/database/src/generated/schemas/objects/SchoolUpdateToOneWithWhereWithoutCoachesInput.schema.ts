import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolUpdateWithoutCoachesInputObjectSchema as SchoolUpdateWithoutCoachesInputObjectSchema } from './SchoolUpdateWithoutCoachesInput.schema';
import { SchoolUncheckedUpdateWithoutCoachesInputObjectSchema as SchoolUncheckedUpdateWithoutCoachesInputObjectSchema } from './SchoolUncheckedUpdateWithoutCoachesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SchoolUpdateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutCoachesInputObjectSchema)])
}).strict();
export const SchoolUpdateToOneWithWhereWithoutCoachesInputObjectSchema: z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutCoachesInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutCoachesInput>;
export const SchoolUpdateToOneWithWhereWithoutCoachesInputObjectZodSchema = makeSchema();
