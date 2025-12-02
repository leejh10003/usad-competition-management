import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolUpdateWithoutTeamsInputObjectSchema as SchoolUpdateWithoutTeamsInputObjectSchema } from './SchoolUpdateWithoutTeamsInput.schema';
import { SchoolUncheckedUpdateWithoutTeamsInputObjectSchema as SchoolUncheckedUpdateWithoutTeamsInputObjectSchema } from './SchoolUncheckedUpdateWithoutTeamsInput.schema';
import { SchoolCreateWithoutTeamsInputObjectSchema as SchoolCreateWithoutTeamsInputObjectSchema } from './SchoolCreateWithoutTeamsInput.schema';
import { SchoolUncheckedCreateWithoutTeamsInputObjectSchema as SchoolUncheckedCreateWithoutTeamsInputObjectSchema } from './SchoolUncheckedCreateWithoutTeamsInput.schema';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SchoolUpdateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutTeamsInputObjectSchema)]),
  create: z.union([z.lazy(() => SchoolCreateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedCreateWithoutTeamsInputObjectSchema)]),
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional()
}).strict();
export const SchoolUpsertWithoutTeamsInputObjectSchema: z.ZodType<Prisma.SchoolUpsertWithoutTeamsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpsertWithoutTeamsInput>;
export const SchoolUpsertWithoutTeamsInputObjectZodSchema = makeSchema();
