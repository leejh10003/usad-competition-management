import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolCreateWithoutTeamsInputObjectSchema as SchoolCreateWithoutTeamsInputObjectSchema } from './SchoolCreateWithoutTeamsInput.schema';
import { SchoolUncheckedCreateWithoutTeamsInputObjectSchema as SchoolUncheckedCreateWithoutTeamsInputObjectSchema } from './SchoolUncheckedCreateWithoutTeamsInput.schema';
import { SchoolCreateOrConnectWithoutTeamsInputObjectSchema as SchoolCreateOrConnectWithoutTeamsInputObjectSchema } from './SchoolCreateOrConnectWithoutTeamsInput.schema';
import { SchoolUpsertWithoutTeamsInputObjectSchema as SchoolUpsertWithoutTeamsInputObjectSchema } from './SchoolUpsertWithoutTeamsInput.schema';
import { SchoolWhereUniqueInputObjectSchema as SchoolWhereUniqueInputObjectSchema } from './SchoolWhereUniqueInput.schema';
import { SchoolUpdateToOneWithWhereWithoutTeamsInputObjectSchema as SchoolUpdateToOneWithWhereWithoutTeamsInputObjectSchema } from './SchoolUpdateToOneWithWhereWithoutTeamsInput.schema';
import { SchoolUpdateWithoutTeamsInputObjectSchema as SchoolUpdateWithoutTeamsInputObjectSchema } from './SchoolUpdateWithoutTeamsInput.schema';
import { SchoolUncheckedUpdateWithoutTeamsInputObjectSchema as SchoolUncheckedUpdateWithoutTeamsInputObjectSchema } from './SchoolUncheckedUpdateWithoutTeamsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SchoolCreateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutTeamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SchoolCreateOrConnectWithoutTeamsInputObjectSchema).optional(),
  upsert: z.lazy(() => SchoolUpsertWithoutTeamsInputObjectSchema).optional(),
  connect: z.lazy(() => SchoolWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SchoolUpdateToOneWithWhereWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUpdateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutTeamsInputObjectSchema)]).optional()
}).strict();
export const SchoolUpdateOneRequiredWithoutTeamsNestedInputObjectSchema: z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutTeamsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateOneRequiredWithoutTeamsNestedInput>;
export const SchoolUpdateOneRequiredWithoutTeamsNestedInputObjectZodSchema = makeSchema();
