import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutCoachesInputObjectSchema as SchoolCreateWithoutCoachesInputObjectSchema } from './SchoolCreateWithoutCoachesInput.schema';
import { SchoolUncheckedCreateWithoutCoachesInputObjectSchema as SchoolUncheckedCreateWithoutCoachesInputObjectSchema } from './SchoolUncheckedCreateWithoutCoachesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SchoolCreateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCoachesInputObjectSchema)])
}).strict();
export const SchoolCreateOrConnectWithoutCoachesInputObjectSchema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutCoachesInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateOrConnectWithoutCoachesInput>;
export const SchoolCreateOrConnectWithoutCoachesInputObjectZodSchema = makeSchema();
