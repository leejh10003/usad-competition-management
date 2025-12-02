import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutCoachesInputObjectSchema as SchoolCreateWithoutCoachesInputObjectSchema } from './SchoolCreateWithoutCoachesInput.schema';
import { SchoolUncheckedCreateWithoutCoachesInputObjectSchema as SchoolUncheckedCreateWithoutCoachesInputObjectSchema } from './SchoolUncheckedCreateWithoutCoachesInput.schema';
import { SchoolCreateOrConnectWithoutCoachesInputObjectSchema as SchoolCreateOrConnectWithoutCoachesInputObjectSchema } from './SchoolCreateOrConnectWithoutCoachesInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutCoachesInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutCoachesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutCoachesInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional()
}).strict();
export const SchoolCreateNestedOneWithoutCoachesInputObjectSchema: z.ZodType<Prisma.SchoolCreateNestedOneWithoutCoachesInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateNestedOneWithoutCoachesInput>;
export const SchoolCreateNestedOneWithoutCoachesInputObjectZodSchema = makeSchema();
