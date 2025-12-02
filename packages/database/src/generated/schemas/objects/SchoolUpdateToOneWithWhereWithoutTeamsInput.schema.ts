import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SchoolWhereInputObjectSchema as SchoolWhereInputObjectSchema } from './SchoolWhereInput.schema';
import { SchoolUpdateWithoutTeamsInputObjectSchema as SchoolUpdateWithoutTeamsInputObjectSchema } from './SchoolUpdateWithoutTeamsInput.schema';
import { SchoolUncheckedUpdateWithoutTeamsInputObjectSchema as SchoolUncheckedUpdateWithoutTeamsInputObjectSchema } from './SchoolUncheckedUpdateWithoutTeamsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SchoolWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SchoolUpdateWithoutTeamsInputObjectSchema), z.lazy(() => SchoolUncheckedUpdateWithoutTeamsInputObjectSchema)])
}).strict();
export const SchoolUpdateToOneWithWhereWithoutTeamsInputObjectSchema: z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutTeamsInput> = makeSchema() as unknown as z.ZodType<Prisma.SchoolUpdateToOneWithWhereWithoutTeamsInput>;
export const SchoolUpdateToOneWithWhereWithoutTeamsInputObjectZodSchema = makeSchema();
