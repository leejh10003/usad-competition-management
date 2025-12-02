import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolCreateWithoutPrimaryCoachInputObjectSchema as SchoolCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateWithoutPrimaryCoachInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SchoolCreateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema)])
}).strict();
export const SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema: z.ZodType<Prisma.SchoolCreateOrConnectWithoutPrimaryCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolCreateOrConnectWithoutPrimaryCoachInput>;
export const SchoolCreateOrConnectWithoutPrimaryCoachInputObjectZodSchema = makeSchema();
