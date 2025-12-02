import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema';
import { TeamUpdateWithoutStudentsInputObjectSchema as TeamUpdateWithoutStudentsInputObjectSchema } from './TeamUpdateWithoutStudentsInput.schema';
import { TeamUncheckedUpdateWithoutStudentsInputObjectSchema as TeamUncheckedUpdateWithoutStudentsInputObjectSchema } from './TeamUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TeamWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TeamUpdateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const TeamUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutStudentsInput>;
export const TeamUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
