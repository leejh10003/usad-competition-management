import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutPrimaryCoachInputObjectSchema as SchoolCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateWithoutPrimaryCoachInput.schema';
import { SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema as SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateOrConnectWithoutPrimaryCoachInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional()
}).strict();
export const SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectSchema: z.ZodType<Prisma.SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInput>;
export const SchoolUncheckedCreateNestedOneWithoutPrimaryCoachInputObjectZodSchema = makeSchema();
