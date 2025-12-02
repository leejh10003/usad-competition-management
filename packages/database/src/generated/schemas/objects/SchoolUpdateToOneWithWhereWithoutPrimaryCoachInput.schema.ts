import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUpdateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedUpdateWithoutPrimaryCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SchoolUpdateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema)])
}).strict();
export const SchoolUpdateToOneWithWhereWithoutPrimaryCoachInputObjectSchema: z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutPrimaryCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutPrimaryCoachInput>;
export const SchoolUpdateToOneWithWhereWithoutPrimaryCoachInputObjectZodSchema = makeSchema();
