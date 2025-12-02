import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutCoachesInputObjectSchema as SchoolCreateWithoutCoachesInputObjectSchema } from './SchoolCreateWithoutCoachesInput.schema';
import { SchoolUncheckedCreateWithoutCoachesInputObjectSchema as SchoolUncheckedCreateWithoutCoachesInputObjectSchema } from './SchoolUncheckedCreateWithoutCoachesInput.schema';
import { SchoolCreateOrConnectWithoutCoachesInputObjectSchema as SchoolCreateOrConnectWithoutCoachesInputObjectSchema } from './SchoolCreateOrConnectWithoutCoachesInput.schema';
import { SchoolUpsertWithoutCoachesInputObjectSchema as SchoolUpsertWithoutCoachesInputObjectSchema } from './SchoolUpsertWithoutCoachesInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateToOneWithWhereWithoutCoachesInputObjectSchema as SchoolUpdateToOneWithWhereWithoutCoachesInputObjectSchema } from './SchoolUpdateToOneWithWhereWithoutCoachesInput.schema';
import { SchoolUpdateWithoutCoachesInputObjectSchema as SchoolUpdateWithoutCoachesInputObjectSchema } from './SchoolUpdateWithoutCoachesInput.schema';
import { SchoolUncheckedUpdateWithoutCoachesInputObjectSchema as SchoolUncheckedUpdateWithoutCoachesInputObjectSchema } from './SchoolUncheckedUpdateWithoutCoachesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCoachesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutCoachesInputObjectSchema).optional(),
  upsert: z.lazy(() => SchoolUpsertWithoutCoachesInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SchoolUpdateToOneWithWhereWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUpdateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutCoachesInputObjectSchema)]).optional()
}).strict();
export const SchoolUpdateOneRequiredWithoutCoachesNestedInputObjectSchema: z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutCoachesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutCoachesNestedInput>;
export const SchoolUpdateOneRequiredWithoutCoachesNestedInputObjectZodSchema = makeSchema();
