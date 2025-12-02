import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamUpdateWithoutStudentsInputObjectSchema as TeamUpdateWithoutStudentsInputObjectSchema } from './TeamUpdateWithoutStudentsInput.schema';
import { TeamUncheckedUpdateWithoutStudentsInputObjectSchema as TeamUncheckedUpdateWithoutStudentsInputObjectSchema } from './TeamUncheckedUpdateWithoutStudentsInput.schema';
import { TeamCreateWithoutStudentsInputObjectSchema as TeamCreateWithoutStudentsInputObjectSchema } from './TeamCreateWithoutStudentsInput.schema';
import { TeamUncheckedCreateWithoutStudentsInputObjectSchema as TeamUncheckedCreateWithoutStudentsInputObjectSchema } from './TeamUncheckedCreateWithoutStudentsInput.schema';
import { TeamWhereInputObjectSchema as TeamWhereInputObjectSchema } from './TeamWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TeamUpdateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => TeamCreateWithoutStudentsInputObjectSchema), z.lazy(() => TeamUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => TeamWhereInputObjectSchema).optional()
}).strict();
export const TeamUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.TeamUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TeamUpsertWithoutStudentsInput>;
export const TeamUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
