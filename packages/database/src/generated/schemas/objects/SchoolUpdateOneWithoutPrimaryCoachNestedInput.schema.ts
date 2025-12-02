import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutPrimaryCoachInputObjectSchema as SchoolCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedCreateWithoutPrimaryCoachInput.schema';
import { SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema as SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema } from './SchoolCreateOrConnectWithoutPrimaryCoachInput.schema';
import { SchoolUpsertWithoutPrimaryCoachInputObjectSchema as SchoolUpsertWithoutPrimaryCoachInputObjectSchema } from './SchoolUpsertWithoutPrimaryCoachInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateToOneWithWhereWithoutPrimaryCoachInputObjectSchema as SchoolUpdateToOneWithWhereWithoutPrimaryCoachInputObjectSchema } from './SchoolUpdateToOneWithWhereWithoutPrimaryCoachInput.schema';
import { SchoolUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUpdateWithoutPrimaryCoachInput.schema';
import { SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema as SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema } from './SchoolUncheckedUpdateWithoutPrimaryCoachInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutPrimaryCoachInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutPrimaryCoachInputObjectSchema).optional(),
  upsert: z.lazy(() => SchoolUpsertWithoutPrimaryCoachInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SchoolWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SchoolUpdateToOneWithWhereWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUpdateWithoutPrimaryCoachInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutPrimaryCoachInputObjectSchema)]).optional()
}).strict();
export const SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectSchema: z.ZodType<Prisma.SchoolUpdateOneWithoutPrimaryCoachNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateOneWithoutPrimaryCoachNestedInput>;
export const SchoolUpdateOneWithoutPrimaryCoachNestedInputObjectZodSchema = makeSchema();
